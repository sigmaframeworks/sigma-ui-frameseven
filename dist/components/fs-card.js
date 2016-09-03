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
        function FSCard() {
            this.cardTitle = '';
            this.hasFooter = false;
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSCard.prototype, "cardTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSCard.prototype, "hasFooter", void 0);
        FSCard = __decorate([
            aurelia_framework_1.customElement('fs-card'), 
            __metadata('design:paramtypes', [])
        ], FSCard);
        return FSCard;
    }());
    exports.FSCard = FSCard;
    var FSCardContent = (function () {
        function FSCardContent() {
        }
        FSCardContent = __decorate([
            aurelia_framework_1.customElement('fs-card-content'),
            aurelia_framework_1.inlineView('<template class="card-content-inner block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSCardContent);
        return FSCardContent;
    }());
    exports.FSCardContent = FSCardContent;
    var FSTitle = (function () {
        function FSTitle() {
        }
        FSTitle = __decorate([
            aurelia_framework_1.customElement('fs-title'),
            aurelia_framework_1.inlineView('<template class="content-block-title block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSTitle);
        return FSTitle;
    }());
    exports.FSTitle = FSTitle;
});
