// UI Http Service
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {autoinject, transient} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";
import {EventAggregator} from "aurelia-event-aggregator";
import {FSApplication} from "./fs-application";
import {FSConstants} from "././fs-constants";

@autoinject()
export class FSHttpClient {

    constructor(public httpClient: HttpClient,
        public appState: FSApplication,
        public eventAggregator: EventAggregator) {
        this.appState.info(this.constructor.name, 'Initialized');

        let self = this;
        httpClient.configure(
            config => {
                config
                    .withBaseUrl(FSConstants.Http.BaseUrl)
                    //.withDefaults({})
                    .withInterceptor({
                        request(request) {
                            appState.info(self.constructor.name, `Requesting ${request.method} ${request.url}`);
                            appState.IsHttpInUse = true;
                            //request.url = encodeURI(request.url);
                            return request;
                        },
                        response(response) {
                            appState.info(self.constructor.name, `Response ${response.status} ${response.url}`);
                            appState.IsHttpInUse = false;

                            if (response instanceof TypeError) {
                                throw Error(response['message']);
                            }

                            if (response.status == 401) {
                                eventAggregator.publish('Unauthorized', null);
                            }
                            else if (response.status != 200) {
                                return response.text()
                                    .then(resp => {
                                        let json: any = {};
                                        try {
                                            json = JSON.parse(resp);
                                        } catch (e) { }
                                        if (json.message) throw Error(json.message);
                                        if (json.error) throw Error(json.error);
                                        if (response.statusText) throw Error(response.statusText);
                                        if (!response.statusText) throw Error('Network Error!!');
                                        return null;
                                    });
                            }
                            return response;
                        },
                        requestError(error) {
                            appState.IsHttpInUse = false;
                            if (error !== null) throw Error(error.message);
                            return error;
                        },
                        responseError(error) {
                            appState.IsHttpInUse = false;
                            if (error !== null) throw Error(error.message);
                            return error;
                        }
                    });
            });
    }

    setBaseUrl(url) {
        this.httpClient.baseUrl = url;
    }

    //**** SHARED METHODS ****//
    get(slug: string, useBasic: boolean = false): Promise<any | string | void> {
        this.appState.info(this.constructor.name, `get [${slug}]`);
        return this.httpClient
            .fetch(slug,
            {
                method: 'get',
                mode: 'cors',
                headers: this.__getHeaders(useBasic)
            })
            .then(resp => resp.json());
    }

    text(slug: string): Promise<any | string | void> {
        this.appState.info(this.constructor.name, `text [${slug}]`);
        return this.httpClient
            .fetch(slug,
            {
                method: 'get',
                mode: 'cors',
                headers: this.__getHeaders()
            })
            .then(resp => resp.text());
    }

    put(slug: string, obj, useBasic: boolean = false): Promise<any | string | void> {
        this.appState.info(this.constructor.name, `put [${slug}]`);
        return this.httpClient
            .fetch(slug,
            {
                method: 'put',
                body: json(obj),
                mode: 'cors',
                headers: this.__getHeaders(useBasic)
            })
            .then(resp => resp.json());
    }

    post(slug: string, obj, useBasic: boolean = false): Promise<any | string | void> {
        this.appState.info(this.constructor.name, `post [${slug}]`);
        return this.httpClient
            .fetch(slug,
            {
                method: 'post',
                body: json(obj),
                mode: 'cors',
                headers: this.__getHeaders(useBasic)
            })
            .then(resp => resp.json());
    }

    delete(slug: string): Promise<any | string | void> {
        this.appState.info(this.constructor.name, `delete [${slug}]`);
        return this.httpClient
            .fetch(slug,
            {
                method: 'delete',
                mode: 'cors',
                headers: this.__getHeaders()
            })
            .then(resp => resp.json());
    }

    private __getHeaders(useBasic: boolean = false) {
        var headers = {
            'X-Requested-With': 'Fetch',
            'Accept': 'application/json',
            //'Content-Type'               : 'application/json',
            'Access-Control-Allow-Origin': '*',
        };
        Object.assign(headers, FSConstants.Http.Headers || {});

        if (FSConstants.Http.AuthorizationHeader && !isEmpty(this.appState.AuthToken) && !useBasic) {
            var token = this.appState.AuthUser + ":" + this.appState.AuthToken;
            var hash = btoa(token);
            headers['Authorization'] = "Basic " + hash;
        }
        return headers;
    }
}
