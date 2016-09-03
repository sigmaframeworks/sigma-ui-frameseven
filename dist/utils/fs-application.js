var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "./fs-utils", "aurelia-router", "./fs-constants"], function (require, exports, aurelia_framework_1, aurelia_logging_1, fs_utils_1, aurelia_router_1, fs_constants_1) {
    "use strict";
    var FSApplication = (function () {
        function FSApplication(router) {
            this.router = router;
            this.AppConfig = fs_constants_1.FSConstants.App;
            this.HttpConfig = fs_constants_1.FSConstants.Http;
            this.IsHttpInUse = false;
            this.IsAuthenticated = false;
            this.__logger = aurelia_logging_1.getLogger('UIApplication');
            this.__logger.info('Initialized');
            Object.assign(this.AppConfig, fs_constants_1.FSConstants.App);
            Object.assign(this.HttpConfig, fs_constants_1.FSConstants.Http);
        }
        FSApplication.prototype.loadPage = function (view, params) {
            if (params === void 0) { params = {}; }
            mainView.loadPage(view);
        };
        FSApplication.prototype.showPopup = function (view, model) {
            fs_utils_1.FSUtils.loadView(view, function (h) {
                framework7.popup(h.firstElementChild);
            }, model);
        };
        FSApplication.prototype.showMainView = function (view) {
            mainView.loadPage(view);
            Dom7('.view-alternate').addClass('hidden');
            Dom7('.view-main.hidden').removeClass('hidden');
        };
        FSApplication.prototype.showLoginView = function (view) {
            mainView.loadPage(view);
            Dom7('.view-main').addClass('hidden');
            Dom7('.view-alternate.hidden').removeClass('hidden');
        };
        FSApplication.prototype.switchDir = function (dir) {
            document.dir = dir;
            framework7.rtl = dir == "rtl";
            framework7.swipePanel = framework7.rtl && fs_constants_1.FSConstants.menuPanel == "left" ? "right" : "left";
            setTimeout(function () {
                if (mainView.activePage)
                    framework7.initPage(mainView.activePage.view.container);
                if (loginView.activePage)
                    framework7.initPage(loginView.activePage.view.container);
            }, 100);
        };
        Object.defineProperty(FSApplication.prototype, "Username", {
            get: function () {
                return this.__username;
            },
            set: function (v) {
                this.__username = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FSApplication.prototype, "UserGroup", {
            get: function () {
                return this.__userGroup;
            },
            set: function (v) {
                this.__userGroup = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FSApplication.prototype, "UserGroupLabel", {
            get: function () {
                return this.__userGroupLabel;
            },
            set: function (v) {
                this.__userGroupLabel = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FSApplication.prototype, "AuthUser", {
            get: function () {
                return this.__authUser;
            },
            set: function (v) {
                this.__authUser = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FSApplication.prototype, "AuthToken", {
            get: function () {
                return this.__authToken;
            },
            set: function (v) {
                this.__authToken = v;
            },
            enumerable: true,
            configurable: true
        });
        FSApplication.prototype.session = function (key, value) {
            if (value === void 0) { value = '§'; }
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
        };
        FSApplication.prototype.clearSession = function () {
            if (window.sessionStorage)
                window.sessionStorage.clear();
        };
        FSApplication.prototype.persist = function (key, value) {
            if (value === void 0) { value = '§'; }
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
        };
        FSApplication.prototype.info = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.info(tag + "::" + msg, rest);
        };
        FSApplication.prototype.warn = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.warn(tag + "::" + msg, rest);
        };
        FSApplication.prototype.debug = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.debug(tag + "::" + msg, rest);
        };
        FSApplication.prototype.error = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.error(tag + "::" + msg, rest);
        };
        FSApplication.prototype.toast = function (config) {
        };
        FSApplication.prototype.toastSuccess = function (config) {
        };
        FSApplication.prototype.toastError = function (config) {
        };
        FSApplication = __decorate([
            aurelia_framework_1.singleton(),
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_router_1.Router])
        ], FSApplication);
        return FSApplication;
    }());
    exports.FSApplication = FSApplication;
});
