// UI FrameSeven Config
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT
import 'lodash';
import 'moment';
import 'numeral';
import 'kramed';
import 'framework7';
import {FrameworkConfiguration} from "aurelia-framework";
import {FSConstants} from "./utils/fs-constants";
import {kramed} from "./utils/fs-utils";
import {FSApplication} from "./utils/fs-application";
import {FSValidationRenderer} from "./utils/fs-validation";

export function configure(aurelia: FrameworkConfiguration, configCallback) {
    // aurelia.container.registerHandler('ui-validator', container => container.get(UIValidationRenderer));

    ///** Core **/
    aurelia.globalResources('./core/fs-viewport');
    aurelia.globalResources('./core/fs-page');

    ///** Components **/
    aurelia.globalResources('./components/fs-content');
    aurelia.globalResources('./components/fs-list');
    aurelia.globalResources('./components/fs-card');
    aurelia.globalResources('./components/fs-swiper');

    /** Inputs **/
    aurelia.globalResources('./inputs/fs-input');

    /** Utils **/
    aurelia.globalResources('./utils/fs-converters');

    kramed.setOptions({
        renderer: new kramed.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    var Configure = {
        title: (t) => {
            FSConstants.App.Title = t;
            return Configure;
        },
        version: (t) => {
            FSConstants.App.Version = t;
            return Configure;
        },
        appKey: (t) => {
            FSConstants.App.Key = t;
            return Configure;
        },
        apiUrl: (t) => {
            FSConstants.Http.BaseUrl = t;
            return Configure;
        },
        apiHeaders: (t) => {
            FSConstants.Http.Headers = t;
            return Configure;
        },
        addAuthHeader: (t) => {
            FSConstants.Http.AuthorizationHeader = t;
            return Configure;
        }
    }

    if (configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(Configure);
    }

    if (Framework7.prototype.device.ios) {
        Dom7('link[rel*="stylesheet"][title="ios"]')[0].disabled = false;
    }
    if (Framework7.prototype.device.android) {
        Dom7('link[rel*="stylesheet"][title="android"]')[0].disabled = false;
    }
}

export {FSApplication} from "./utils/fs-application";
export {FSConstants} from "./utils/fs-constants";
export {FSEvent} from "./utils/fs-event";
export {FSFormat} from "./utils/fs-formatters";
export {FSHttpService} from "./utils/fs-http-service";
export {FSUtils, _, moment, numeral, kramed} from "./utils/fs-utils";
export {FSValidationRenderer} from "./utils/fs-validation";
