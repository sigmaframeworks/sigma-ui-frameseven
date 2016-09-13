// FS List Blocks
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable, inlineView, useView} from "aurelia-framework";

@customElement('fs-list')
@inlineView('<template class="list-block block"><slot></slot></template>')
export class FSList { }

@containerless()
@customElement('fs-list-block')
@inlineView('<template><ul><slot></slot></ul></template>')
export class FSListBlock { }

@customElement('fs-list-group')
@inlineView('<template class="list-group block"><ul><li class="list-group-title" if.bind="label">${label}</li><slot></slot></ul></template>')
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

@customElement('fs-list-item')
@useView('./fs-list-item.html')
export class FSListItem {
  @bindable()
  icon: string = '';
}

@customElement('fs-list-link')
@useView('./fs-list-link.html')
export class FSListLink {
  @bindable()
  icon: string = '';
  @bindable()
  href: string = '#';
  @bindable()
  class: string = '';

  private __link;

  constructor(public element: Element) { }
  bind() {
    if (this.element.hasAttribute('external')) this.__link.classList.add('external');
  }
}
