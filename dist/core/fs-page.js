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
    var FSPage = (function () {
        function FSPage(element) {
            this.element = element;
            this.pageTitle = '';
            this.dataPage = '';
            this.hideHeader = false;
            this.hideMenu = false;
            this.showBack = false;
            this.showToolbar = false;
            this.popup = false;
            this.constants = sigma_ui_frameseven_1.FSConstants;
            this.framework7 = window.framework7;
            this.hideHeader = element.hasAttribute('hide-header') == true;
            this.hideMenu = element.hasAttribute('hide-menu') == true;
            this.popup = element.hasAttribute('popup');
            this.hideHeader = element.hasAttribute('show-back');
            this.showToolbar = element.hasAttribute('show-toolbar');
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSPage.prototype, "pageTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSPage.prototype, "dataPage", void 0);
        FSPage = __decorate([
            aurelia_framework_1.customElement('fs-page'), 
            __metadata('design:paramtypes', [Element])
        ], FSPage);
        return FSPage;
    }());
    exports.FSPage = FSPage;
});
