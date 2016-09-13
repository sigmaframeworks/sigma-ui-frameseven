// FS Page
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, inlineView, useView, bindable} from "aurelia-framework";
import {FSConstants, FSEvent} from "../sigma-ui-frameseven";

@customElement('fs-page')
@inlineView('<template data-page.bind="dataPage" class="page block"><slot></slot></template>')
export class FSPage {
    @bindable()
    dataPage = '';

    constants = FSConstants;
    framework7 = window.framework7;

    constructor(public element: Element) {
    }

    unbind() {
        FSEvent.fireEvent('unbind', this.element);
    }
    detached() {
        FSEvent.fireEvent('detached', this.element);
    }

    attached() {
        FSEvent.queueTask(() => {
            framework7.initPage(this.element);
            if (this.element.querySelector('fs-navbar')) this.element.classList.add('navbar-fixed');
            if (this.element.querySelector('fs-toolbar')) this.element.classList.add('toolbar-through');
        });
    }
}

@useView('./fs-navbar.html')
@customElement('fs-navbar')
export class FSNavBar {
    @bindable()
    navTitle = '';
}

@containerless()
@customElement('fs-tool')
@inlineView('<template><a href="#" data-panel="${menuPanel}" class="link icon-only ${dataClass}"><i class="icon ${iconClass}"></i></a></template>')
export class FSNavTool {
    iconClass = '';
    dataClass = '';

    @bindable()
    menuPanel = 'right';

    constructor(public element: Element) {
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
}

@customElement('fs-page-content')
@inlineView('<template class="page-content block"><slot></slot></template>')
export class FSPageContent { }

@customElement('fs-toolbar')
@inlineView('<template class="toolbar toolbar-bottom" show.bind="showToolbar" style="z-index:14;"><div class="toolbar-inner"><slot></slot></div></template>')
export class FSToolbar { }

@customElement('fs-row')
@inlineView('<template class="row"><slot></slot></template>')
export class FSRow { }

@customElement('fs-column')
@inlineView('<template class="col-fill"><slot></slot></template>')
export class FSColumn { }