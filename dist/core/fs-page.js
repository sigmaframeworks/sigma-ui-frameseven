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
                Dom7("[data-page=\"" + _this.dataPage + "\"] a.external").click(function (a) { if (a.target.dataset.url)
                    window.open(a.target.dataset.url, '_system', 'location=yes'); });
                if (_this.element.querySelector('fs-navbar'))
                    _this.element.classList.add('navbar-fixed');
                if (_this.element.querySelector('fs-toolbar'))
                    _this.element.classList.add('toolbar-through');
                setTimeout(function () { return framework7.initSmartSelects(_this.element); }, 500);
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
    var FSPopup = (function () {
        function FSPopup(element) {
            var _this = this;
            this.element = element;
            this.dataPage = '';
            this.constants = sigma_ui_frameseven_1.FSConstants;
            this.framework7 = window.framework7;
            Dom7(this.element).on('close', function () {
                _this.element.au.controller.unbind();
                _this.element.au.controller.detached();
            });
        }
        FSPopup.prototype.unbind = function () {
            sigma_ui_frameseven_1.FSEvent.fireEvent('unbind', this.element);
        };
        FSPopup.prototype.detached = function () {
            sigma_ui_frameseven_1.FSEvent.fireEvent('detached', this.element);
        };
        FSPopup.prototype.attached = function () {
            var _this = this;
            sigma_ui_frameseven_1.FSEvent.queueTask(function () {
                Dom7("[data-page=\"" + _this.dataPage + "\"] a.external").click(function (a) { if (a.target.dataset.url)
                    window.open(a.target.dataset.url, '_system', 'location=yes'); });
                if (_this.element.querySelector('fs-navbar'))
                    _this.element.classList.add('navbar-fixed');
                if (_this.element.querySelector('fs-toolbar'))
                    _this.element.classList.add('toolbar-through');
                framework7.popup(_this.element, true);
                setTimeout(function () { return framework7.initSmartSelects(_this.element); }, 500);
            });
        };
        FSPopup.prototype.close = function () {
            var _this = this;
            framework7.closeModal(this.element);
            setTimeout(function () {
                _this.unbind();
                _this.detached();
                _this.element.remove();
            }, 500);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSPopup.prototype, "dataPage", void 0);
        FSPopup = __decorate([
            aurelia_framework_1.customElement('fs-popup'),
            aurelia_framework_1.inlineView('<template class="popup page view block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSPopup);
        return FSPopup;
    }());
    exports.FSPopup = FSPopup;
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
    var FSNavLeft = (function () {
        function FSNavLeft() {
        }
        FSNavLeft = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-nav-left'),
            aurelia_framework_1.inlineView('<template><div slot="left" class="left"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [])
        ], FSNavLeft);
        return FSNavLeft;
    }());
    exports.FSNavLeft = FSNavLeft;
    var FSNavRight = (function () {
        function FSNavRight() {
        }
        FSNavRight = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-nav-right'),
            aurelia_framework_1.inlineView('<template><div slot="right" class="right"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [])
        ], FSNavRight);
        return FSNavRight;
    }());
    exports.FSNavRight = FSNavRight;
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
            else if (element.hasAttribute('refresh')) {
                this.iconClass = 'icon-refresh';
            }
        }
        FSNavTool.prototype.__fireClick = function () {
            return sigma_ui_frameseven_1.FSEvent.fireEvent('click', this.element);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSNavTool.prototype, "menuPanel", void 0);
        FSNavTool = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-tool'),
            aurelia_framework_1.inlineView('<template><a href="#" click.trigger="__fireClick()" data-panel="${menuPanel}" class="link icon-only ${dataClass}"><slot><i class="icon ${iconClass}"></i></slot></a></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSNavTool);
        return FSNavTool;
    }());
    exports.FSNavTool = FSNavTool;
    var FSPageContent = (function () {
        function FSPageContent(element) {
            var _this = this;
            this.element = element;
            this.hasPtr = false;
            if (this.hasPtr = this.element.hasAttribute('pull-to-refresh'))
                this.element.classList.add('pull-to-refresh-content');
            this.element['refreshDone'] = function () { return _this.refreshDone(); };
            Dom7(this.element).on('refresh', function (e) { return sigma_ui_frameseven_1.FSEvent.fireEvent('refresh', _this.element); });
        }
        FSPageContent.prototype.refreshDone = function () {
            framework7.pullToRefreshDone();
        };
        FSPageContent = __decorate([
            aurelia_framework_1.customElement('fs-page-content'),
            aurelia_framework_1.inlineView('<template class="page-content block"><div if.bind="hasPtr" class="pull-to-refresh-layer"><div class="preloader"></div><div class="pull-to-refresh-arrow"></div></div><slot></slot></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSPageContent);
        return FSPageContent;
    }());
    exports.FSPageContent = FSPageContent;
    var FSToolbar = (function () {
        function FSToolbar() {
        }
        FSToolbar = __decorate([
            aurelia_framework_1.customElement('fs-toolbar'),
            aurelia_framework_1.inlineView('<template class="toolbar toolbar-bottom"><div class="toolbar-inner"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [])
        ], FSToolbar);
        return FSToolbar;
    }());
    exports.FSToolbar = FSToolbar;
    var FSRow = (function () {
        function FSRow(element) {
            this.element = element;
            if (this.element.hasAttribute('top'))
                this.element.classList.add('row-top');
            if (this.element.hasAttribute('bottom'))
                this.element.classList.add('row-bottom');
            if (this.element.hasAttribute('middle'))
                this.element.classList.add('row-middle');
            if (this.element.hasAttribute('stretch'))
                this.element.classList.add('row-stretch');
            if (this.element.hasAttribute('start'))
                this.element.classList.add('row-start');
            if (this.element.hasAttribute('end'))
                this.element.classList.add('row-end');
            if (this.element.hasAttribute('center'))
                this.element.classList.add('row-center');
            if (this.element.hasAttribute('spaced'))
                this.element.classList.add('row-spaced');
        }
        FSRow = __decorate([
            aurelia_framework_1.customElement('fs-row'),
            aurelia_framework_1.inlineView('<template class="row"><slot></slot></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSRow);
        return FSRow;
    }());
    exports.FSRow = FSRow;
    var FSColumn = (function () {
        function FSColumn(element) {
            this.element = element;
            this.width = '';
            if (this.element.hasAttribute('auto'))
                this.element.classList.add('col-auto');
            else if (this.element.hasAttribute('fill'))
                this.element.classList.add('col-fill');
            if (this.element.hasAttribute('top'))
                this.element.classList.add('col-top');
            if (this.element.hasAttribute('bottom'))
                this.element.classList.add('col-bottom');
            if (this.element.hasAttribute('middle'))
                this.element.classList.add('col-middle');
            if (this.element.hasAttribute('stretch'))
                this.element.classList.add('col-stretch');
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSColumn.prototype, "width", void 0);
        FSColumn = __decorate([
            aurelia_framework_1.customElement('fs-column'),
            aurelia_framework_1.inlineView('<template style="${width?\'flex-basis:\'+width : \'\'}"><slot></slot></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSColumn);
        return FSColumn;
    }());
    exports.FSColumn = FSColumn;
});
