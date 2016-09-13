// FS List Blocks
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindingMode, bindable, inlineView, useView} from "aurelia-framework";

export class FSGenericInput {
  public element: Element;

  hideLabel = false;

  bind() {
    this.hideLabel = this.element.hasAttribute('hide-label');
  }
}

@containerless()
@customElement('fs-input-label')
@inlineView('<template><div class="item-title label" slot="label"><slot></slot></div></template>')
export class FSInputLabel { }

@customElement('fs-input')
export class FSInput extends FSGenericInput {
  constructor(public element: Element) {
    super();
  }
}

@customElement('fs-phone')
@useView('./fs-phone.html')
export class FSPhone extends FSGenericInput {
  __flag = '';
  __value = '';

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  value = '';
  @bindable()
  placeholder = '';
  @bindable()
  model;

  constructor(public element: Element) {
    super();
    this.placeholder = PhoneLib.getExample('us', PhoneLib.TYPE.FIXED_LINE_OR_MOBILE, false);
  }

  valueChanged(newValue) {
    this.__value = PhoneLib.formatInput(newValue);
  }

  __format($event) {
    console.log(this.__value);
    if (!/^\+/.test(this.__value)) this.__value = '+' + this.__value;
    this.__value = PhoneLib.formatInput(this.__value);
    this.__value = PhoneLib.formatInput(this.__value);
    this.__flag = PhoneLib.getIso2Code(this.__value);
  }
}

@containerless()
@customElement('fs-switch')
@useView('./fs-switch.html')
export class FSSwitch extends FSGenericInput {
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  checked = false;

  constructor(public element: Element) {
    super();
  }
}