var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    var FSGenericInput = (function () {
        function FSGenericInput() {
            this.hideLabel = false;
        }
        FSGenericInput.prototype.bind = function () {
            this.hideLabel = this.element.hasAttribute('hide-label');
        };
        return FSGenericInput;
    }());
    exports.FSGenericInput = FSGenericInput;
    var FSLink = (function () {
        function FSLink(element) {
            this.element = element;
            this.href = '#';
            this.class = '';
            this.__extraClasses = '';
            if (element.hasAttribute('external'))
                this.__extraClasses += 'external ';
        }
        FSLink.prototype.__fireClick = function () {
            return sigma_ui_frameseven_1.FSEvent.fireEvent('click', this.element);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSLink.prototype, "href", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSLink.prototype, "class", void 0);
        FSLink = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-link'),
            aurelia_framework_1.inlineView('<template><a click.trigger="__fireClick()" class="link ${class} ${__extraClasses}" href.bind="href"><slot></slot></a></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSLink);
        return FSLink;
    }());
    exports.FSLink = FSLink;
    var FSButton = (function () {
        function FSButton(element) {
            this.element = element;
            this.href = '#';
            this.class = '';
            this.__extraClasses = '';
            if (element.hasAttribute('raised'))
                this.__extraClasses += 'button-raised ';
            if (element.hasAttribute('round'))
                this.__extraClasses += 'button-round ';
            if (element.hasAttribute('fill'))
                this.__extraClasses += 'button-fill ';
            if (element.hasAttribute('big'))
                this.__extraClasses += 'button-big ';
            if (element.hasAttribute('alt'))
                this.__extraClasses += 'button-alternate ';
            if (element.hasAttribute('external'))
                this.__extraClasses += 'external ';
        }
        FSButton.prototype.__fireClick = function () {
            return sigma_ui_frameseven_1.FSEvent.fireEvent('click', this.element);
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
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-button'),
            aurelia_framework_1.inlineView('<template><a click.trigger="__fireClick()" class="button ${class} ${__extraClasses}" href.bind="href"><slot></slot></a></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSButton);
        return FSButton;
    }());
    exports.FSButton = FSButton;
    var FSInputLabel = (function () {
        function FSInputLabel() {
            this.width = '35%';
        }
        FSInputLabel.prototype.bind = function () {
            if (Framework7.prototype.device.android)
                this.width = 'inherit';
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSInputLabel.prototype, "width", void 0);
        FSInputLabel = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-input-label'),
            aurelia_framework_1.inlineView('<template><div class="item-title label" slot="label" css.bind="{width:width}"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [])
        ], FSInputLabel);
        return FSInputLabel;
    }());
    exports.FSInputLabel = FSInputLabel;
    var FSInput = (function (_super) {
        __extends(FSInput, _super);
        function FSInput(element) {
            _super.call(this);
            this.element = element;
            this.icon = '';
        }
        FSInput.prototype.attached = function () {
            var input;
            if (input = this.element.querySelector('input'))
                input.onfocus = function () { return input.scrollIntoView(true); };
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSInput.prototype, "icon", void 0);
        FSInput = __decorate([
            aurelia_framework_1.customElement('fs-input'), 
            __metadata('design:paramtypes', [Element])
        ], FSInput);
        return FSInput;
    }(FSGenericInput));
    exports.FSInput = FSInput;
    var FSPhone = (function () {
        function FSPhone(element) {
            this.__value = '';
            this.element = element;
        }
        FSPhone.prototype.attached = function () {
            var _this = this;
            getParentByClass(this.element, 'fs-input-group').classList.add('fs-phone-input');
            this.__flag = document.createElement('SPAN');
            this.__flag.classList.add('ui-flag');
            this.element.offsetParent.insertBefore(this.__flag, this.element);
            this.element.type = "tel";
            this.element.onkeyup = function (evt) { return _this.__format(evt); };
            this.element.placeholder = PhoneLib.getExample('us', PhoneLib.TYPE.FIXED_LINE_OR_MOBILE, false);
            this.element.value = PhoneLib.formatInput(this.element.value);
            this.__flag.className = "ui-flag " + PhoneLib.getIso2Code(this.element.value);
        };
        FSPhone.prototype.__format = function ($event) {
            var val = $event.target.value;
            if (!/^\+/.test(val))
                val = '+' + val;
            this.element.value = PhoneLib.formatInput(val);
            this.__flag.className = "ui-flag " + PhoneLib.getIso2Code(val);
        };
        FSPhone = __decorate([
            aurelia_framework_1.customAttribute('phone'), 
            __metadata('design:paramtypes', [Element])
        ], FSPhone);
        return FSPhone;
    }());
    exports.FSPhone = FSPhone;
    var FSSwitch = (function (_super) {
        __extends(FSSwitch, _super);
        function FSSwitch(element) {
            _super.call(this);
            this.element = element;
            this.checked = false;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], FSSwitch.prototype, "checked", void 0);
        FSSwitch = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-switch'),
            aurelia_framework_1.useView('./fs-switch.html'), 
            __metadata('design:paramtypes', [Element])
        ], FSSwitch);
        return FSSwitch;
    }(FSGenericInput));
    exports.FSSwitch = FSSwitch;
});
