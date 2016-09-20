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
            Dom7(`[data-page="${this.dataPage}"] a.external`).click(a => { if (a.target.dataset.url) window.open(a.target.dataset.url, '_system', 'location=yes'); });
            if (this.element.querySelector('fs-navbar')) this.element.classList.add('navbar-fixed');
            if (this.element.querySelector('fs-toolbar')) this.element.classList.add('toolbar-through');
            setTimeout(() => framework7.initSmartSelects(this.element), 500);
        });
    }
}

@customElement('fs-popup')
@inlineView('<template class="popup page view block"><slot></slot></template>')
export class FSPopup {
    @bindable()
    dataPage = '';

    constants = FSConstants;
    framework7 = window.framework7;

    constructor(public element: Element) {
        Dom7(this.element).on('close', () => {
            this.element.au.controller.unbind();
            this.element.au.controller.detached();
        });
    }

    unbind() {
        FSEvent.fireEvent('unbind', this.element);
    }
    detached() {
        FSEvent.fireEvent('detached', this.element);
    }

    attached() {
        FSEvent.queueTask(() => {
            Dom7(`[data-page="${this.dataPage}"] a.external`).click(a => { if (a.target.dataset.url) window.open(a.target.dataset.url, '_system', 'location=yes'); });
            if (this.element.querySelector('fs-navbar')) this.element.classList.add('navbar-fixed');
            if (this.element.querySelector('fs-toolbar')) this.element.classList.add('toolbar-through');
            framework7.popup(this.element, true);
            setTimeout(() => framework7.initSmartSelects(this.element), 500);
        });
    }

    close() {
        framework7.closeModal(this.element);
        setTimeout(() => {
            this.unbind();
            this.detached();
            this.element.remove();
        }, 500);
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
@inlineView('<template><a href="#" click.trigger="__fireClick()" data-panel="${menuPanel}" class="link icon-only ${dataClass}"><slot><i class="icon ${iconClass}"></i></slot></a></template>')
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
        else if (element.hasAttribute('refresh')) {
            this.iconClass = 'icon-refresh';
        }
    }

    __fireClick() {
        return FSEvent.fireEvent('click', this.element);
    }
}

@customElement('fs-page-content')
@inlineView('<template class="page-content block"><slot></slot></template>')
export class FSPageContent { }

@customElement('fs-toolbar')
@inlineView('<template class="toolbar toolbar-bottom"><div class="toolbar-inner"><slot></slot></div></template>')
export class FSToolbar { }

@customElement('fs-row')
@inlineView('<template class="row"><slot></slot></template>')
export class FSRow { }

@customElement('fs-column')
@inlineView('<template class=""><slot></slot></template>')
export class FSColumn {
    constructor(public element: Element) {
        if (this.element.hasAttribute('auto')) this.element.classList.add('col-auto');
        else this.element.classList.add('col-fill');
    }
}