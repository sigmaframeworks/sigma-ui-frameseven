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

    public IsHttpInUse: boolean = false;
    public IsAuthenticated: boolean = false;

    constructor(public router: Router) {
        this.__logger = getLogger('UIApplication');
        this.__logger.info('Initialized');
    }

    get activeView() {
        try { return mainView.activePage.name; } catch (e) { return ''; }
    }
    set activeView(s) {
    }

    loadPage(view, params?) {
        mainView.loadPage(view);
    }

    showPopup(view, model?) {
        FSUtils.loadView(view, h => {
            document.body.appendChild(h.firstElementChild);
        }, model);
    }

    closePopup(dp) {
        try { Dom7(`[data-page="${dp}"]`)[0].au.controller.viewModel.close(); } catch (e) { }
    }

    showMainView(view) {
        framework7.params.swipePanel = framework7.params.rtl ? (FSConstants.menuPanel == "left" ? "right" : "left") : FSConstants.menuPanel;
        mainView.history = mainView.history.splice(0, 1);
        mainView.loadPage(view);
        Dom7('.view-alternate').addClass('hidden');
        Dom7('.view-main.hidden').removeClass('hidden');
    }
    showLoginView(view) {
        framework7.params.swipePanel = false
        loginView.history = loginView.history.splice(0, 1);
        loginView.loadPage(view);
        Dom7('.view-main').addClass('hidden');
        Dom7('.view-alternate.hidden').removeClass('hidden');
    }

    mainViewBack(url, animate = true) {
        mainView.back({ url: url, force: true, animatePages: animate });
    }

    removeSplash() {
        Dom7(".fs-splash").remove();
    }

    switchDir(dir) {
        document.dir = dir;
        framework7.rtl = dir == "rtl";

        if (Framework7.prototype.device.ios) {
            Dom7('link[rel*="stylesheet"][title="ios-rtl"]')[0].disabled = !framework7.rtl;
        }
        if (Framework7.prototype.device.android) {
            Dom7('link[rel*="stylesheet"][title="android-rtl"]')[0].disabled = !framework7.rtl;
        }

        framework7.params.swipePanel = framework7.rtl ? (FSConstants.menuPanel == "left" ? "right" : "left") : FSConstants.menuPanel;
        framework7.menuPanel = "panel-" + framework7.params.swipePanel;
        setTimeout(() => {
            framework7.initSwipePanels();
            if (mainView.activePage) framework7.reinitPage(mainView.activePage.view.container)
            if (loginView.activePage) framework7.reinitPage(loginView.activePage.view.container)
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
                return JSON.parse(window.sessionStorage.getItem(FSConstants.App.Key + ':' + key));
            }
            else if (value === null) {
                window.sessionStorage.removeItem(FSConstants.App.Key + ':' + key);
            }
            else {
                window.sessionStorage.setItem(FSConstants.App.Key + ':' + key, JSON.stringify(value));
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
                return JSON.parse(window.localStorage.getItem(FSConstants.App.Key + ':' + key));
            }
            else if (value === null) {
                window.localStorage.removeItem(FSConstants.App.Key + ':' + key);
            }
            else {
                window.localStorage.setItem(FSConstants.App.Key + ':' + key, JSON.stringify(value));
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

    showIndicator() {
        framework7.showIndicator();
    }
    hideIndicator() {
        framework7.hideIndicator();
    }

}
