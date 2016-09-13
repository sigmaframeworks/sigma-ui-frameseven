// FS Content Element
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable, inlineView, autoinject} from "aurelia-framework";

@customElement('fs-content-title')
@inlineView('<template class="content-block-title block"><slot></slot></template>')
export class FSContentTitle {
}

@customElement('fs-content')
@inlineView('<template class="content-block block"><slot></slot></template>')
export class FSContent {
}

@autoinject()
@customElement('fs-content-block')
@inlineView('<template class="content-block block"><div class="content-block-inner"><slot></slot></div></template>')
export class FSContentBlock {
    constructor(element: Element) {
        if (element.hasAttribute('inset')) element.classList.add('inset');
        if (element.hasAttribute('tablet-inset')) element.classList.add('tablet-inset');
    }
}