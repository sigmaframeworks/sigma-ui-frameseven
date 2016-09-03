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
    var FSContentTitle = (function () {
        function FSContentTitle() {
        }
        FSContentTitle = __decorate([
            aurelia_framework_1.customElement('fs-content-title'),
            aurelia_framework_1.inlineView('<template class="content-block-title block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSContentTitle);
        return FSContentTitle;
    }());
    exports.FSContentTitle = FSContentTitle;
    var FSContent = (function () {
        function FSContent() {
        }
        FSContent = __decorate([
            aurelia_framework_1.customElement('fs-content'),
            aurelia_framework_1.inlineView('<template class="content-block block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSContent);
        return FSContent;
    }());
    exports.FSContent = FSContent;
    var FSContentBlock = (function () {
        function FSContentBlock(element) {
            if (element.hasAttribute('inset'))
                element.classList.add('inset');
            if (element.hasAttribute('tablet-inset'))
                element.classList.add('tablet-inset');
        }
        FSContentBlock = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('fs-content-block'),
            aurelia_framework_1.inlineView('<template class="content-block block"><div class="content-block-inner"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSContentBlock);
        return FSContentBlock;
    }());
    exports.FSContentBlock = FSContentBlock;
});
