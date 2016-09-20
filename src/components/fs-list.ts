// FS List Blocks
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable, inlineView, useView} from "aurelia-framework";
import {FSEvent} from "../sigma-ui-frameseven";

@customElement('fs-list')
@inlineView('<template class="list-block block ${__searchable?\'list-block-search searchbar-found\':\'\'}"><slot></slot></template>')
export class FSList {
    __searchable
    constructor(public element: Element) {
        if (this.element.hasAttribute('cards-list')) this.element.classList.add('cards-list');
        if (this.element.hasAttribute('media-list')) this.element.classList.add('media-list');
        this.__searchable = this.element.hasAttribute('searchable');
    }
}

@containerless()
@customElement('fs-list-block')
@inlineView('<template><ul><slot></slot></ul></template>')
export class FSListBlock { }

@containerless()
@customElement('fs-list-card')
@inlineView('<template><li class="card"><slot></slot></li></template>')
export class FSListCard { }

@containerless()
@customElement('fs-list-group')
@inlineView('<template><div class="list-group"><ul><li class="list-group-title" if.bind="label">${label}</li><slot></slot></ul></div></template>')
export class FSListGroup {
    @bindable()
    label: string = '';
}

@customElement('fs-list-label')
@inlineView('<template class="list-block-label"><slot></slot></template>')
export class FSListLabel { }

@customElement('fs-list-divider')
@inlineView('<template class="item-divider"><slot></slot></template>')
export class FSListDivider { }

@containerless()
@customElement('fs-item-media')
@inlineView('<template><div class="item-media" slot="media"><slot></slot></div></template>')
export class FSListMedia { }

@customElement('fs-item-title')
@inlineView('<template class="item-title col-fill"><slot></slot></template>')
export class FSListTitle { }

@customElement('fs-item-after')
@inlineView('<template class="item-after col-auto"><slot></slot></template>')
export class FSListAfter { }

@customElement('fs-item-row')
@inlineView('<template class="item-title-row col-fill"><slot></slot></template>')
export class FSListRow { }

@customElement('fs-item-subtitle')
@inlineView('<template class="item-subtitle block"><slot></slot></template>')
export class FSListSubtitle { }

@customElement('fs-item-text')
@inlineView('<template class="item-text block"><slot></slot></template>')
export class FSListText { }

@containerless()
@customElement('fs-list-item')
@useView('./fs-list-item.html')
export class FSListItem {
    @bindable()
    class: string = '';
    @bindable()
    icon: string = '';
    constructor(public element: Element) {
        if (this.element.hasAttribute('card')) this.class += ' card';
    }
}

@containerless()
@customElement('fs-list-link')
@useView('./fs-list-link.html')
export class FSListLink {
    @bindable()
    class: string = '';
    @bindable()
    icon: string = '';
    @bindable()
    href: string = '#';
    @bindable()
    openIn: string = 'picker';

    private __link;


    constructor(public element: Element) {
        if (this.element.hasAttribute('card')) this.class += ' card';
    }
    bind() {
        if (this.element.hasAttribute('smart-select')) this.__link.classList.add('smart-select');
        if (this.element.hasAttribute('external')) this.__link.classList.add('external');
    }

    __fireClick() {
        return FSEvent.fireEvent('click', this.element);
    }
}


@containerless()
@customElement('fs-searchbar')
@useView('./fs-searchbar.html')
export class FSSearchbar {
    @bindable()
    onsearch;
    @bindable()
    onenable;
    @bindable()
    ondisable;
    @bindable()
    onclear;

    @bindable()
    placeholder = 'Search...';
    @bindable()
    buttonCancel = 'Cancel';

    @bindable()
    searchList = '';

    __form;
    searchBar;

    attached() {
        this.searchBar = framework7.searchbar(this.__form, {
            searchList: '.list-block-search' + this.searchList,
            searchIn: '.item-title,.item-subtitle,.item-text',
            onClear: this.onclear,
            onEnable: this.onenable,
            onDisable: this.ondisable,
            customSearch: isFunction(this.onsearch) ? this.onsearch : false
        });
    }

    unbind() {
        this.searchBar.destroy();
    }

}
