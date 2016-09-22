var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var FSCard = (function () {
        function FSCard(element) {
            this.element = element;
            if (this.element.hasAttribute('accordion-item'))
                this.element.classList.add('accordion-item');
        }
        FSCard = __decorate([
            aurelia_framework_1.customElement('fs-card'),
            aurelia_framework_1.inlineView('<template class="card block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSCard);
        return FSCard;
    }());
    exports.FSCard = FSCard;
    var FSCardContent = (function () {
        function FSCardContent(element) {
            this.element = element;
            if (this.element.hasAttribute('accordion-content'))
                this.element.classList.add('accordion-item-content');
        }
        FSCardContent = __decorate([
            aurelia_framework_1.customElement('fs-card-content'),
            aurelia_framework_1.inlineView('<template class="card-content block"><div class="card-content-inner"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSCardContent);
        return FSCardContent;
    }());
    exports.FSCardContent = FSCardContent;
    var FSCardHeader = (function () {
        function FSCardHeader() {
        }
        FSCardHeader = __decorate([
            aurelia_framework_1.customElement('fs-card-header'),
            aurelia_framework_1.inlineView('<template class="card-header"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSCardHeader);
        return FSCardHeader;
    }());
    exports.FSCardHeader = FSCardHeader;
    var FSCardFooter = (function () {
        function FSCardFooter() {
        }
        FSCardFooter = __decorate([
            aurelia_framework_1.customElement('fs-card-footer'),
            aurelia_framework_1.inlineView('<template class="card-footer"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSCardFooter);
        return FSCardFooter;
    }());
    exports.FSCardFooter = FSCardFooter;
});
