import { HttpClient } from "aurelia-fetch-client";
import { EventAggregator } from "aurelia-event-aggregator";
import { FSApplication } from "./fs-application";
export declare class FSHttpService {
    httpClient: HttpClient;
    appState: FSApplication;
    eventAggregator: EventAggregator;
    constructor(httpClient: HttpClient, appState: FSApplication, eventAggregator: EventAggregator);
    setBaseUrl(url: any): void;
    get(slug: string): Promise<any | string | void>;
    text(slug: string): Promise<any | string | void>;
    put(slug: string, obj: any): Promise<any | string | void>;
    post(slug: string, obj: any): Promise<any | string | void>;
    delete(slug: string): Promise<any | string | void>;
    private __getHeaders();
}
