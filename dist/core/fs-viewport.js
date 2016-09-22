var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../sigma-ui-frameseven"], function (require, exports, aurelia_framework_1, sigma_ui_frameseven_1) {
    "use strict";
    var FSViewport = (function () {
        function FSViewport(element, container) {
            this.element = element;
            this.container = container;
            this.swipeMenu = false;
            this.showSplashProgress = false;
            this.class = "";
            this.splashProgressColor = "multi";
            sigma_ui_frameseven_1.FSUtils.container(container);
            if (element.hasAttribute('swipe-menu'))
                sigma_ui_frameseven_1.FSConstants.swipeMenu = this.swipeMenu = true;
            if (element.hasAttribute('splash-progress'))
                this.showSplashProgress = true;
            if (element.hasAttribute('menu-start'))
                sigma_ui_frameseven_1.FSConstants.menuPanel = this.swipePanel = "left";
            if (element.hasAttribute('menu-end'))
                sigma_ui_frameseven_1.FSConstants.menuPanel = this.swipePanel = "right";
        }
        FSViewport.prototype.attached = function () {
            var _this = this;
            document.addEventListener('deviceready', function () {
                _this.init();
            }, false);
            if (!window.cordova) {
                setTimeout(function () {
                    _this.init();
                }, 100);
            }
        };
        FSViewport.prototype.init = function () {
            var isRtl = document.dir == "rtl";
            this.f7 = window.framework7 = new Framework7({
                rtl: isRtl,
                router: true,
                swipeout: false,
                sortable: false,
                swipePanelActiveArea: 44,
                swipePanel: this.swipeMenu ? (isRtl ? (this.swipePanel == "left" ? "right" : "left") : this.swipePanel) : false,
                notificationHold: 2500,
                imagesLazyLoadThreshold: 150,
                notificationCloseOnClick: true,
                modalTitle: sigma_ui_frameseven_1.FSConstants.App.Title,
                materialPageLoadDelay: 100,
                material: Framework7.prototype.device.android,
                onAjaxStart: function (xhr) { return xhr.open('GET', 'blank.html'); },
                preprocess: function (content, url, next) { return sigma_ui_frameseven_1.FSUtils.loadView(url, next); },
                onPageBeforeRemove: function (app, page) {
                    page.container.au.controller.unbind();
                    page.container.au.controller.detached();
                }
            });
            framework7.menuPanel = "panel-" + (framework7.rtl ? (sigma_ui_frameseven_1.FSConstants.menuPanel == "left" ? "right" : "left") : sigma_ui_frameseven_1.FSConstants.menuPanel);
            framework7.init();
            if (this.showSplashProgress)
                framework7.showProgressbar('.fs-splash', this.splashProgressColor);
            if (Framework7.prototype.device.android) {
                document.addEventListener("backbutton", function () {
                    Dom7(".back").click();
                }, false);
            }
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.disableScroll(false);
            }
            window.mainView = framework7.addView('.view-main', {
                dynamicNavbar: false,
                uniqueHistory: true
            });
            window.loginView = framework7.addView('.view-alternate', {
                dynamicNavbar: false,
                uniqueHistory: true
            });
            sigma_ui_frameseven_1.FSEvent.fireEvent('appready', this.element);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSViewport.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSViewport.prototype, "splashProgressColor", void 0);
        FSViewport = __decorate([
            aurelia_framework_1.singleton(),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-viewport'), 
            __metadata('design:paramtypes', [Element, aurelia_framework_1.Container])
        ], FSViewport);
        return FSViewport;
    }());
    exports.FSViewport = FSViewport;
});
