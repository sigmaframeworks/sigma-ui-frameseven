// FS List Blocks
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, customAttribute, containerless, bindingMode, bindable, inlineView, useView} from "aurelia-framework";
import {FSEvent} from "../sigma-ui-frameseven";

export class FSGenericInput {
    public element: Element;

    hideLabel = false;

    bind() {
        this.hideLabel = this.element.hasAttribute('hide-label');
    }
}

@containerless()
@customElement('fs-link')
@inlineView('<template><a click.trigger="__fireClick()" class="link ${class} ${__extraClasses}" href.bind="href"><slot></slot></a></template>')
export class FSLink {
    @bindable()
    href: string = '#';
    @bindable()
    class: string = '';

    __extraClasses = '';

    constructor(private element: Element) {
        if (element.hasAttribute('external')) this.__extraClasses += 'external ';
    }

    __fireClick() {
        return FSEvent.fireEvent('click', this.element);
    }
}

@containerless()
@customElement('fs-button')
@inlineView('<template><a click.trigger="__fireClick()" class="button ${class} ${__extraClasses}" href.bind="href"><slot></slot></a></template>')
export class FSButton {
    @bindable()
    href: string = '#';
    @bindable()
    class: string = '';

    __extraClasses = '';

    constructor(private element: Element) {
        if (element.hasAttribute('raised')) this.__extraClasses += 'button-raised ';
        if (element.hasAttribute('round')) this.__extraClasses += 'button-round ';
        if (element.hasAttribute('fill')) this.__extraClasses += 'button-fill ';
        if (element.hasAttribute('big')) this.__extraClasses += 'button-big ';
        if (element.hasAttribute('alt')) this.__extraClasses += 'button-alternate ';
        if (element.hasAttribute('external')) this.__extraClasses += 'external ';
    }

    __fireClick() {
        return FSEvent.fireEvent('click', this.element);
    }
}

@containerless()
@customElement('fs-input-label')
@inlineView('<template><div class="item-title label" slot="label" css.bind="{width:width}"><slot></slot></div></template>')
export class FSInputLabel {
    @bindable()
    width: string = '35%';
    bind() {
        if (Framework7.prototype.device.android) this.width = 'inherit';
    }
}

@customElement('fs-input')
export class FSInput extends FSGenericInput {
    @bindable()
    icon: string = '';
    constructor(public element: Element) {
        super();
    }
    attached() {
        let input;
        if (input = this.element.querySelector('input')) input.onfocus = () => input.scrollIntoView(true);
    }
}

@customAttribute('phone')
export class FSPhone {
    __flag;
    __value = '';

    element: HTMLInputElement;
    inputGroup: HTMLElement;

    constructor(element: Element) {
        this.element = <HTMLInputElement>element;
    }

    attached() {
        getParentByClass(this.element, 'fs-input-group').classList.add('fs-phone-input');
        this.__flag = document.createElement('SPAN');
        this.__flag.classList.add('ui-flag');
        this.element.offsetParent.insertBefore(this.__flag, this.element);

        this.element.type = "tel";
        this.element.onkeyup = evt => this.__format(evt);
        this.element.placeholder = PhoneLib.getExample('us', PhoneLib.TYPE.FIXED_LINE_OR_MOBILE, false);

        this.element.value = PhoneLib.formatInput(this.element.value);
        this.__flag.className = `ui-flag ${PhoneLib.getIso2Code(this.element.value)}`;
    }

    __format($event) {
        var val = $event.target.value;
        if (!/^\+/.test(val)) val = '+' + val;
        // this.value = PhoneLib.format(val, '', PhoneLib.FORMAT.FULL);
        this.element.value = PhoneLib.formatInput(val);
        this.__flag.className = `ui-flag ${PhoneLib.getIso2Code(val)}`;
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