// UI Application
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {singleton, autoinject} from "aurelia-framework";
import {getLogger} from "aurelia-logging";
import {FSUtils} from "./fs-utils";
import {FSEvent} from "./fs-event";
import {Redirect, Router} from "aurelia-router";
import {FSConstants} from "./fs-constants";

@singleton()
@autoinject()
export class FSApplication {

    private __logger;

    public AppConfig = FSConstants.App;
    public HttpConfig = FSConstants.Http;

    public IsHttpInUse: boolean = false;
    public IsAuthenticated: boolean = false;

    constructor(public router: Router) {
        this.__logger = getLogger('UIApplication');
        this.__logger.info('Initialized');

        Object.assign(this.AppConfig, FSConstants.App);
        Object.assign(this.HttpConfig, FSConstants.Http);
    }


    loadPage(view, params = {}) {
        mainView.loadPage(view);
    }

    showPopup(view, model) {
        FSUtils.loadView(view, h => {
            framework7.popup(h.firstElementChild);
        }, model);
    }

    showMainView(view) {
        mainView.loadPage(view);
        Dom7('.view-alternate').addClass('hidden');
        Dom7('.view-main.hidden').removeClass('hidden');
    }
    showLoginView(view) {
        mainView.loadPage(view);
        Dom7('.view-main').addClass('hidden');
        Dom7('.view-alternate.hidden').removeClass('hidden');
    }

    mainViewBack(url) {
        mainView.back({ url: url, force: true, animatePages: true });
    }

    switchDir(dir) {
        document.dir = dir;
        framework7.rtl = dir == "rtl";
        framework7.swipePanel = framework7.rtl && FSConstants.menuPanel == "left" ? "right" : "left";
        setTimeout(() => {
            if (mainView.activePage) framework7.initPage(mainView.activePage.view.container)
            if (loginView.activePage) framework7.initPage(loginView.activePage.view.container)
        }, 100);
    }


    /** App Constants **/
    private __username;
    private __userGroup;
    private __userGroupLabel;
    private __authUser;
    private __authToken;

    get Username() {
        return this.__username;
    }

    set Username(v) {
        this.__username = v;
    }

    get UserGroup() {
        return this.__userGroup;
    }

    set UserGroup(v) {
        this.__userGroup = v;
    }

    get UserGroupLabel() {
        return this.__userGroupLabel;
    }

    set UserGroupLabel(v) {
        this.__userGroupLabel = v;
    }

    get AuthUser() {
        return this.__authUser;
    }

    set AuthUser(v) {
        this.__authUser = v;
    }

    get AuthToken() {
        return this.__authToken;
    }

    set AuthToken(v) {
        this.__authToken = v;
    }

    /** Session State **/
    session(key, value: any = '§') {
        if (window.sessionStorage) {
            if (value === '§') {
                return JSON.parse(window.sessionStorage.getItem(this.AppConfig.Key + ':' + key));
            }
            else if (value === null) {
                window.sessionStorage.removeItem(this.AppConfig.Key + ':' + key);
            }
            else {
                window.sessionStorage.setItem(this.AppConfig.Key + ':' + key, JSON.stringify(value));
            }
        }
        return null;
    }

    clearSession() {
        if (window.sessionStorage) window.sessionStorage.clear();
    }

    /** Persistent State **/
    persist(key, value: any = '§') {
        if (window.localStorage) {
            if (value === '§') {
                return JSON.parse(window.localStorage.getItem(this.AppConfig.Key + ':' + key));
            }
            else if (value === null) {
                window.localStorage.removeItem(this.AppConfig.Key + ':' + key);
            }
            else {
                window.localStorage.setItem(this.AppConfig.Key + ':' + key, JSON.stringify(value));
            }
        }
        return null;
    }

    /** Logger **/
    info(tag, msg, ...rest) {
        this.__logger.info(`${tag}::${msg}`, rest);
    }

    warn(tag, msg, ...rest) {
        this.__logger.warn(`${tag}::${msg}`, rest);
    }

    debug(tag, msg, ...rest) {
        this.__logger.debug(`${tag}::${msg}`, rest);
    }

    error(tag, msg, ...rest) {
        this.__logger.error(`${tag}::${msg}`, rest);
    }

    /** Toast **/
    private __overlayContainer;

    toast(config) {
    }

    toastSuccess(config) {
    }

    toastError(config) {
    }
}
