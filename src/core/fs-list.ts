// FS List Blocks
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable, inlineView, useView} from "aurelia-framework";

@customElement('fs-list')
@inlineView('<template class="list-block block"><ul><slot></slot></ul></template>')
export class FSList { }

@customElement('fs-list-label')
@inlineView('<template class="item-divider with-label"><slot></slot></template>')
export class FSListLabel { }

@customElement('fs-list-divider')
@inlineView('<template class="item-divider"><slot></slot></template>')
export class FSListDivider { }

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

	private __link;

	constructor(public element: Element) { }
	bind() {
		if (this.element.hasAttribute('external')) this.__link.classList.add('external');
	}
}
