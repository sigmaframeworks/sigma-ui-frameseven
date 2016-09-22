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
            this.IsHttpInUse = false;
            this.IsAuthenticated = false;
            this.__logger = aurelia_logging_1.getLogger('UIApplication');
            this.__logger.info('Initialized');
        }
        Object.defineProperty(FSApplication.prototype, "activeView", {
            get: function () {
                try {
                    return mainView.activePage.name;
                }
                catch (e) {
                    return '';
                }
            },
            set: function (s) {
            },
            enumerable: true,
            configurable: true
        });
        FSApplication.prototype.loadPage = function (view, params) {
            mainView.loadPage(view);
        };
        FSApplication.prototype.showPopup = function (view, model) {
            fs_utils_1.FSUtils.loadView(view, function (h) {
                document.body.appendChild(h.firstElementChild);
            }, model);
        };
        FSApplication.prototype.closePopup = function (dp) {
            try {
                Dom7("[data-page=\"" + dp + "\"]")[0].au.controller.viewModel.close();
            }
            catch (e) { }
        };
        FSApplication.prototype.showMainView = function (view) {
            framework7.params.swipePanel = fs_constants_1.FSConstants.swipeMenu ? (framework7.params.rtl ? (fs_constants_1.FSConstants.menuPanel == "left" ? "right" : "left") : fs_constants_1.FSConstants.menuPanel) : false;
            mainView.history = mainView.history.splice(0, 1);
            mainView.loadPage(view);
            Dom7('.view-alternate').addClass('hidden');
            Dom7('.view-main.hidden').removeClass('hidden');
        };
        FSApplication.prototype.showLoginView = function (view) {
            framework7.params.swipePanel = false;
            loginView.history = loginView.history.splice(0, 1);
            loginView.loadPage(view);
            Dom7('.view-main').addClass('hidden');
            Dom7('.view-alternate.hidden').removeClass('hidden');
        };
        FSApplication.prototype.mainViewBack = function (url, animate) {
            if (animate === void 0) { animate = true; }
            mainView.back({ url: url, force: true, animatePages: animate });
        };
        FSApplication.prototype.removeSplash = function () {
            Dom7(".fs-splash").remove();
        };
        FSApplication.prototype.switchDir = function (dir) {
            document.dir = dir;
            framework7.rtl = dir == "rtl";
            if (Framework7.prototype.device.ios) {
                Dom7('link[rel*="stylesheet"][title="ios-rtl"]')[0].disabled = !framework7.rtl;
            }
            if (Framework7.prototype.device.android) {
                Dom7('link[rel*="stylesheet"][title="android-rtl"]')[0].disabled = !framework7.rtl;
            }
            framework7.params.swipePanel = framework7.rtl ? (fs_constants_1.FSConstants.menuPanel == "left" ? "right" : "left") : fs_constants_1.FSConstants.menuPanel;
            framework7.menuPanel = "panel-" + framework7.params.swipePanel;
            setTimeout(function () {
                framework7.initSwipePanels();
                if (mainView.activePage)
                    framework7.reinitPage(mainView.activePage.view.container);
                if (loginView.activePage)
                    framework7.reinitPage(loginView.activePage.view.container);
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
                    return JSON.parse(window.sessionStorage.getItem(fs_constants_1.FSConstants.App.Key + ':' + key));
                }
                else if (value === null) {
                    window.sessionStorage.removeItem(fs_constants_1.FSConstants.App.Key + ':' + key);
                }
                else {
                    window.sessionStorage.setItem(fs_constants_1.FSConstants.App.Key + ':' + key, JSON.stringify(value));
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
                    return JSON.parse(window.localStorage.getItem(fs_constants_1.FSConstants.App.Key + ':' + key));
                }
                else if (value === null) {
                    window.localStorage.removeItem(fs_constants_1.FSConstants.App.Key + ':' + key);
                }
                else {
                    window.localStorage.setItem(fs_constants_1.FSConstants.App.Key + ':' + key, JSON.stringify(value));
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
        FSApplication.prototype.showIndicator = function () {
            framework7.showIndicator();
        };
        FSApplication.prototype.hideIndicator = function () {
            framework7.hideIndicator();
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
