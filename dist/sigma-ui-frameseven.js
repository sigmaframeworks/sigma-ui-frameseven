define(["require", "exports", "./utils/fs-constants", "./utils/fs-utils", "./utils/fs-application", "./utils/fs-constants", "./utils/fs-event", "./utils/fs-formatters", "./utils/fs-http-service", "./utils/fs-utils", "./utils/fs-validation", 'lodash', 'moment', 'numeral', 'kramed', 'framework7', './scripts/phonelib', './scripts/countries', './scripts/currencies'], function (require, exports, fs_constants_1, fs_utils_1, fs_application_1, fs_constants_2, fs_event_1, fs_formatters_1, fs_http_service_1, fs_utils_2, fs_validation_1) {
    "use strict";
    function configure(aurelia, configCallback) {
        aurelia.globalResources('./core/fs-viewport');
        aurelia.globalResources('./core/fs-page');
        aurelia.globalResources('./core/fs-content');
        aurelia.globalResources('./utils/fs-converters');
        fs_utils_1.kramed.setOptions({
            renderer: new fs_utils_1.kramed.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });
        var Configure = {
            title: function (t) {
                fs_constants_1.FSConstants.App.Title = t;
                return Configure;
            },
            version: function (t) {
                fs_constants_1.FSConstants.App.Version = t;
                return Configure;
            },
            appKey: function (t) {
                fs_constants_1.FSConstants.App.Key = t;
                return Configure;
            },
            apiUrl: function (t) {
                fs_constants_1.FSConstants.Http.BaseUrl = t;
                return Configure;
            },
            apiHeaders: function (t) {
                fs_constants_1.FSConstants.Http.Headers = t;
                return Configure;
            },
            addAuthHeader: function (t) {
                fs_constants_1.FSConstants.Http.AuthorizationHeader = t;
                return Configure;
            }
        };
        if (Framework7.prototype.device.ios) {
            Dom7('link[rel*="stylesheet"][title="ios"]')[0].disabled = false;
        }
        if (Framework7.prototype.device.android) {
            Dom7('link[rel*="stylesheet"][title="android"]')[0].disabled = false;
        }
        if (configCallback !== undefined && typeof configCallback === 'function') {
            configCallback(Configure);
        }
    }
    exports.configure = configure;
    exports.FSApplication = fs_application_1.FSApplication;
    exports.FSConstants = fs_constants_2.FSConstants;
    exports.FSEvent = fs_event_1.FSEvent;
    exports.FSFormat = fs_formatters_1.FSFormat;
    exports.FSHttpService = fs_http_service_1.FSHttpService;
    exports.FSUtils = fs_utils_2.FSUtils;
    exports._ = fs_utils_2._;
    exports.moment = fs_utils_2.moment;
    exports.numeral = fs_utils_2.numeral;
    exports.kramed = fs_utils_2.kramed;
    exports.FSValidationRenderer = fs_validation_1.FSValidationRenderer;
    exports.validatemap = fs_validation_1.validatemap;
    exports.validatephone = fs_validation_1.validatephone;
});
