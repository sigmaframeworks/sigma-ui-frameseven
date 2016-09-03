var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var FSInput = (function () {
        function FSInput(element) {
            this.value = '';
            this.label = '';
            this.placeholder = '';
            this.type = 'text';
            this.width = '35%';
            if (element.hasAttribute('number'))
                this.type = 'number';
            if (element.hasAttribute('search'))
                this.type = 'search';
            if (element.hasAttribute('email'))
                this.type = 'email';
            if (element.hasAttribute('tel'))
                this.type = 'tel';
        }
        FSInput.prototype.scrollIntoView = function () {
            this.__input.scrollIntoView(true);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', String)
        ], FSInput.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSInput.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSInput.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSInput.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSInput.prototype, "width", void 0);
        FSInput = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('fs-input'), 
            __metadata('design:paramtypes', [Element])
        ], FSInput);
        return FSInput;
    }());
    exports.FSInput = FSInput;
    var FSButton = (function () {
        function FSButton(element) {
            this.element = element;
            this.href = "#";
            this.class = "";
        }
        FSButton.prototype.bind = function () {
            if (this.element.hasAttribute('fill'))
                this.__button.classList.add('button-fill');
            if (this.element.hasAttribute('big'))
                this.__button.classList.add('button-big');
            if (this.element.hasAttribute('round'))
                this.__button.classList.add('button-round');
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSButton.prototype, "href", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSButton.prototype, "class", void 0);
        FSButton = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('fs-button'),
            aurelia_framework_1.inlineView('<template class="block"><a href.bind="href" class="button button-raised ${class}" ref="__button"><slot></slot></a></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSButton);
        return FSButton;
    }());
    exports.FSButton = FSButton;
    var FSSwitch = (function () {
        function FSSwitch() {
            this.checked = false;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Boolean)
        ], FSSwitch.prototype, "checked", void 0);
        FSSwitch = __decorate([
            aurelia_framework_1.customElement('fs-switch'),
            aurelia_framework_1.inlineView('<template><label class="label-switch color-theme"><input type="checkbox" checked.bind="checked"><div class="checkbox"></div></label></template>'), 
            __metadata('design:paramtypes', [])
        ], FSSwitch);
        return FSSwitch;
    }());
    exports.FSSwitch = FSSwitch;
});
