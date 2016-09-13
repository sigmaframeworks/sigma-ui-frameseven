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
            this.dataPage = '';
            this.constants = sigma_ui_frameseven_1.FSConstants;
            this.framework7 = window.framework7;
        }
        FSPage.prototype.unbind = function () {
            sigma_ui_frameseven_1.FSEvent.fireEvent('unbind', this.element);
        };
        FSPage.prototype.detached = function () {
            sigma_ui_frameseven_1.FSEvent.fireEvent('detached', this.element);
        };
        FSPage.prototype.attached = function () {
            var _this = this;
            sigma_ui_frameseven_1.FSEvent.queueTask(function () {
                framework7.initPage(_this.element);
                if (_this.element.querySelector('fs-navbar'))
                    _this.element.classList.add('navbar-fixed');
                if (_this.element.querySelector('fs-toolbar'))
                    _this.element.classList.add('toolbar-through');
            });
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSPage.prototype, "dataPage", void 0);
        FSPage = __decorate([
            aurelia_framework_1.customElement('fs-page'),
            aurelia_framework_1.inlineView('<template data-page.bind="dataPage" class="page block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSPage);
        return FSPage;
    }());
    exports.FSPage = FSPage;
    var FSNavBar = (function () {
        function FSNavBar() {
            this.navTitle = '';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSNavBar.prototype, "navTitle", void 0);
        FSNavBar = __decorate([
            aurelia_framework_1.useView('./fs-navbar.html'),
            aurelia_framework_1.customElement('fs-navbar'), 
            __metadata('design:paramtypes', [])
        ], FSNavBar);
        return FSNavBar;
    }());
    exports.FSNavBar = FSNavBar;
    var FSNavTool = (function () {
        function FSNavTool(element) {
            this.element = element;
            this.iconClass = '';
            this.dataClass = '';
            this.menuPanel = 'right';
            if (element.hasAttribute('menu')) {
                this.iconClass = 'icon-bars';
                this.dataClass = 'open-panel';
            }
            else if (element.hasAttribute('back')) {
                this.dataClass = 'back';
                this.iconClass = 'icon-back';
            }
            else if (element.hasAttribute('close')) {
                this.iconClass = 'icon-close';
                this.dataClass = 'close-popup';
            }
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSNavTool.prototype, "menuPanel", void 0);
        FSNavTool = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-tool'),
            aurelia_framework_1.inlineView('<template><a href="#" data-panel="${menuPanel}" class="link icon-only ${dataClass}"><i class="icon ${iconClass}"></i></a></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSNavTool);
        return FSNavTool;
    }());
    exports.FSNavTool = FSNavTool;
    var FSPageContent = (function () {
        function FSPageContent() {
        }
        FSPageContent = __decorate([
            aurelia_framework_1.customElement('fs-page-content'),
            aurelia_framework_1.inlineView('<template class="page-content block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSPageContent);
        return FSPageContent;
    }());
    exports.FSPageContent = FSPageContent;
    var FSToolbar = (function () {
        function FSToolbar() {
        }
        FSToolbar = __decorate([
            aurelia_framework_1.customElement('fs-toolbar'),
            aurelia_framework_1.inlineView('<template class="toolbar toolbar-bottom" show.bind="showToolbar" style="z-index:14;"><div class="toolbar-inner"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [])
        ], FSToolbar);
        return FSToolbar;
    }());
    exports.FSToolbar = FSToolbar;
});
