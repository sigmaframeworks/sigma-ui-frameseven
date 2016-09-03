// FS Page
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable} from "aurelia-framework";
import {FSConstants, FSEvent} from "../sigma-ui-frameseven";

@customElement('fs-page')
export class FSPage {
    @bindable()
    pageTitle = '';
    @bindable()
    dataPage = '';

    hideHeader = false;
    hideMenu = false;

    showBack = false;
    showToolbar = false;
    popup = false;

    constants = FSConstants;
    framework7 = window.framework7;

    constructor(public element: Element) {
        this.hideHeader = element.hasAttribute('hide-header') == true;
        this.hideMenu = element.hasAttribute('hide-menu') == true;

        this.popup = element.hasAttribute('popup');
        this.hideHeader = element.hasAttribute('show-back');
        this.showToolbar = element.hasAttribute('show-toolbar');
    }

    unbind() {
        FSEvent.fireEvent('unbind', this.element);
    }
    detached() {
        FSEvent.fireEvent('detached', this.element);
    }
}
