// FS Card
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable, inlineView} from "aurelia-framework";

@customElement('fs-card')
@inlineView('<template class="card block"><slot></slot></template>')
export class FSCard {
  constructor(public element: Element) {
    if (this.element.hasAttribute('accordion-item')) this.element.classList.add('accordion-item');
  }
}

@customElement('fs-card-content')
@inlineView('<template class="card-content block"><div class="card-content-inner"><slot></slot></div></template>')
export class FSCardContent {
  constructor(public element: Element) {
    if (this.element.hasAttribute('accordion-content')) this.element.classList.add('accordion-item-content');
  }
}

@customElement('fs-card-header')
@inlineView('<template class="card-header"><slot></slot></template>')
export class FSCardHeader { }

@customElement('fs-card-footer')
@inlineView('<template class="card-footer"><slot></slot></template>')
export class FSCardFooter { }
