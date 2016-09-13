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
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
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
    var FSInputLabel = (function () {
        function FSInputLabel() {
        }
        FSInputLabel = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-input-label'),
            aurelia_framework_1.inlineView('<template><div class="item-title label" slot="label"><slot></slot></div></template>'), 
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
        }
        FSInput = __decorate([
            aurelia_framework_1.customElement('fs-input'), 
            __metadata('design:paramtypes', [Element])
        ], FSInput);
        return FSInput;
    }(FSGenericInput));
    exports.FSInput = FSInput;
    var FSPhone = (function (_super) {
        __extends(FSPhone, _super);
        function FSPhone(element) {
            _super.call(this);
            this.element = element;
            this.__flag = '';
            this.__value = '';
            this.value = '';
            this.placeholder = '';
            this.placeholder = PhoneLib.getExample('us', PhoneLib.TYPE.FIXED_LINE_OR_MOBILE, false);
        }
        FSPhone.prototype.valueChanged = function (newValue) {
            this.__value = PhoneLib.formatInput(newValue);
        };
        FSPhone.prototype.__format = function ($event) {
            console.log(this.__value);
            if (!/^\+/.test(this.__value))
                this.__value = '+' + this.__value;
            this.__value = PhoneLib.formatInput(this.__value);
            this.__value = PhoneLib.formatInput(this.__value);
            this.__flag = PhoneLib.getIso2Code(this.__value);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], FSPhone.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSPhone.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSPhone.prototype, "model", void 0);
        FSPhone = __decorate([
            aurelia_framework_1.customElement('fs-phone'),
            aurelia_framework_1.useView('./fs-phone.html'), 
            __metadata('design:paramtypes', [Element])
        ], FSPhone);
        return FSPhone;
    }(FSGenericInput));
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
