// FS Card
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {customElement, containerless, bindable, inlineView} from "aurelia-framework";

@customElement('fs-card')
@inlineView('<template class="card block"><slot></slot></template>')
export class FSCard {
}

@customElement('fs-card-content')
@inlineView('<template class="card-content block"><div class="card-content-inner"><slot></slot></div></template>')
export class FSCardContent { }

@customElement('fs-card-header')
@inlineView('<template class="card-header block"><slot></slot></template>')
export class FSCardHeader { }

@customElement('fs-card-footer')
@inlineView('<template class="card-footer block"><slot></slot></template>')
export class FSCardFooter { }
