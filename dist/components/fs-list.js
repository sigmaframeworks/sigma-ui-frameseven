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
    var FSList = (function () {
        function FSList() {
        }
        FSList = __decorate([
            aurelia_framework_1.customElement('fs-list'),
            aurelia_framework_1.inlineView('<template class="list-block block"><ul><slot></slot></ul></template>'), 
            __metadata('design:paramtypes', [])
        ], FSList);
        return FSList;
    }());
    exports.FSList = FSList;
    var FSListLabel = (function () {
        function FSListLabel() {
        }
        FSListLabel = __decorate([
            aurelia_framework_1.customElement('fs-list-label'),
            aurelia_framework_1.inlineView('<template class="item-divider with-label"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListLabel);
        return FSListLabel;
    }());
    exports.FSListLabel = FSListLabel;
    var FSListDivider = (function () {
        function FSListDivider() {
        }
        FSListDivider = __decorate([
            aurelia_framework_1.customElement('fs-list-divider'),
            aurelia_framework_1.inlineView('<template class="item-divider"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListDivider);
        return FSListDivider;
    }());
    exports.FSListDivider = FSListDivider;
    var FSListItem = (function () {
        function FSListItem() {
            this.icon = '';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListItem.prototype, "icon", void 0);
        FSListItem = __decorate([
            aurelia_framework_1.customElement('fs-list-item'),
            aurelia_framework_1.useView('./fs-list-item.html'), 
            __metadata('design:paramtypes', [])
        ], FSListItem);
        return FSListItem;
    }());
    exports.FSListItem = FSListItem;
    var FSListLink = (function () {
        function FSListLink() {
            this.icon = '';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListLink.prototype, "icon", void 0);
        FSListLink = __decorate([
            aurelia_framework_1.customElement('fs-list-link'),
            aurelia_framework_1.useView('./fs-list-link.html'), 
            __metadata('design:paramtypes', [])
        ], FSListLink);
        return FSListLink;
    }());
    exports.FSListLink = FSListLink;
});
