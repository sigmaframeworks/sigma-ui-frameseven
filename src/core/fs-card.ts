// FS Card
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable, inlineView} from "aurelia-framework";

@customElement('fs-card')
export class FSCard {
	@bindable()
	cardTitle = '';
	@bindable()
	hasFooter = false;
}

@customElement('fs-card-content')
@inlineView('<template class="card-content-inner block"><slot></slot></template>')
export class FSCardContent { }
