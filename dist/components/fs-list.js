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
            aurelia_framework_1.inlineView('<template class="list-block block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSList);
        return FSList;
    }());
    exports.FSList = FSList;
    var FSListBlock = (function () {
        function FSListBlock() {
        }
        FSListBlock = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-list-block'),
            aurelia_framework_1.inlineView('<template><ul><slot></slot></ul></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListBlock);
        return FSListBlock;
    }());
    exports.FSListBlock = FSListBlock;
    var FSListGroup = (function () {
        function FSListGroup() {
            this.label = '';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListGroup.prototype, "label", void 0);
        FSListGroup = __decorate([
            aurelia_framework_1.customElement('fs-list-group'),
            aurelia_framework_1.inlineView('<template class="list-group block"><ul><li class="list-group-title" if.bind="label">${label}</li><slot></slot></ul></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListGroup);
        return FSListGroup;
    }());
    exports.FSListGroup = FSListGroup;
    var FSListLabel = (function () {
        function FSListLabel() {
        }
        FSListLabel = __decorate([
            aurelia_framework_1.customElement('fs-list-label'),
            aurelia_framework_1.inlineView('<template class="list-block-label"><slot></slot></template>'), 
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
    var FSListMedia = (function () {
        function FSListMedia() {
        }
        FSListMedia = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-item-media'),
            aurelia_framework_1.inlineView('<template><div class="item-media" slot="media"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListMedia);
        return FSListMedia;
    }());
    exports.FSListMedia = FSListMedia;
    var FSListTitle = (function () {
        function FSListTitle() {
        }
        FSListTitle = __decorate([
            aurelia_framework_1.customElement('fs-item-title'),
            aurelia_framework_1.inlineView('<template class="item-title col-fill"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListTitle);
        return FSListTitle;
    }());
    exports.FSListTitle = FSListTitle;
    var FSListAfter = (function () {
        function FSListAfter() {
        }
        FSListAfter = __decorate([
            aurelia_framework_1.customElement('fs-item-after'),
            aurelia_framework_1.inlineView('<template class="item-after col-auto"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListAfter);
        return FSListAfter;
    }());
    exports.FSListAfter = FSListAfter;
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
        function FSListLink(element) {
            this.element = element;
            this.icon = '';
            this.href = '#';
            this.class = '';
        }
        FSListLink.prototype.bind = function () {
            if (this.element.hasAttribute('external'))
                this.__link.classList.add('external');
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListLink.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListLink.prototype, "href", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListLink.prototype, "class", void 0);
        FSListLink = __decorate([
            aurelia_framework_1.customElement('fs-list-link'),
            aurelia_framework_1.useView('./fs-list-link.html'), 
            __metadata('design:paramtypes', [Element])
        ], FSListLink);
        return FSListLink;
    }());
    exports.FSListLink = FSListLink;
});
