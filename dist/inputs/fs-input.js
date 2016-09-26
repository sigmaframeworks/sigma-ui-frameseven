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
            this.dataConfirm = '';
            this.dataConfirmTitle = '';
            this.dataCloseOnCancel = '';
            this.__extraClasses = '';
            if (element.hasAttribute('external'))
                this.__extraClasses += 'external ';
            if (element.hasAttribute('accordion-toggle'))
                this.__extraClasses += ' accordion-item-toggle';
        }
        FSLink.prototype.attached = function () {
            console.log(this.__link.dataset = this.element['dataset']);
        };
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
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSLink.prototype, "dataConfirm", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSLink.prototype, "dataConfirmTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSLink.prototype, "dataCloseOnCancel", void 0);
        FSLink = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-link'),
            aurelia_framework_1.inlineView('<template><a ref="__link" click.trigger="__fireClick()" class="link ${class} ${__extraClasses}" href.bind="href" data-confirm.bind="dataConfirm" data-confirm-title.bind="dataConfirmTitle" data-close-on-cancel.bind="dataCloseOnCancel"><slot></slot></a></template>'), 
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
    var FSDate = (function () {
        function FSDate(element) {
            this.element = element;
        }
        FSDate.prototype.attached = function () {
            var today = new Date();
            this.__picker = framework7.picker({
                input: '#picker-date',
                rotateEffect: true,
                value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
                onChange: function (picker, values, displayValues) {
                    var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
                    if (values[1] > daysInMonth) {
                        picker.cols[1].setValue(daysInMonth);
                    }
                },
                formatValue: function (p, values, displayValues) {
                    return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
                },
                cols: [
                    {
                        values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
                        displayValues: ('January February March April May June July August September October November December').split(' '),
                        textAlign: 'left'
                    },
                    {
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                    },
                    {
                        values: (function () {
                            var arr = [];
                            for (var i = 1950; i <= 2030; i++) {
                                arr.push(i);
                            }
                            return arr;
                        })(),
                    },
                    {
                        divider: true,
                        content: '  '
                    },
                    {
                        values: (function () {
                            var arr = [];
                            for (var i = 0; i <= 23; i++) {
                                arr.push(i);
                            }
                            return arr;
                        })(),
                    },
                    {
                        divider: true,
                        content: ':'
                    },
                    {
                        values: (function () {
                            var arr = [];
                            for (var i = 0; i <= 59; i++) {
                                arr.push(i < 10 ? '0' + i : i);
                            }
                            return arr;
                        })(),
                    }
                ]
            });
        };
        FSDate.prototype.unbind = function () {
            this.__picker.destroy();
        };
        FSDate = __decorate([
            aurelia_framework_1.customAttribute('date'), 
            __metadata('design:paramtypes', [Element])
        ], FSDate);
        return FSDate;
    }());
    exports.FSDate = FSDate;
    var FSSwitch = (function (_super) {
        __extends(FSSwitch, _super);
        function FSSwitch(element) {
            _super.call(this);
            this.element = element;
            this.checked = false;
        }
        FSSwitch.prototype.bind = function () {
            this.checked = isTrue(this.checked);
        };
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
