var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../sigma-ui-frameseven"], function (require, exports, aurelia_framework_1, sigma_ui_frameseven_1) {
    "use strict";
    var FSList = (function () {
        function FSList(element) {
            this.element = element;
            if (this.element.hasAttribute('accordion'))
                this.element.classList.add('accordion-list');
            if (this.element.hasAttribute('accordion-content'))
                this.element.classList.add('accordion-item-content');
            if (this.element.hasAttribute('cards'))
                this.element.classList.add('cards-list');
            if (this.element.hasAttribute('media'))
                this.element.classList.add('media-list');
            this.__searchable = this.element.hasAttribute('searchable');
        }
        FSList = __decorate([
            aurelia_framework_1.customElement('fs-list'),
            aurelia_framework_1.inlineView('<template class="list-block block ${__searchable?\'list-block-search searchbar-found\':\'\'}"><slot></slot></template>'), 
            __metadata('design:paramtypes', [Element])
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
    var FSListCard = (function () {
        function FSListCard(element) {
            this.element = element;
            this.class = '';
            if (this.element.hasAttribute('accordion-item'))
                this.class += ' accordion-item';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSListCard.prototype, "class", void 0);
        FSListCard = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-list-card'),
            aurelia_framework_1.inlineView('<template><li class="card ${class}"><slot></slot></li></template>'), 
            __metadata('design:paramtypes', [Element])
        ], FSListCard);
        return FSListCard;
    }());
    exports.FSListCard = FSListCard;
    var FSListGroup = (function () {
        function FSListGroup() {
            this.label = '';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListGroup.prototype, "label", void 0);
        FSListGroup = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-list-group'),
            aurelia_framework_1.inlineView('<template><div class="list-group"><ul><li class="list-group-title" if.bind="label">${label}</li><slot></slot></ul></div></template>'), 
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
        function FSListMedia(element) {
            this.element = element;
            this.class = '';
            if (this.element.hasAttribute('accordion'))
                this.class += ' accordion-item';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSListMedia.prototype, "class", void 0);
        FSListMedia = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-item-media'),
            aurelia_framework_1.inlineView('<template><div class="item-media ${class}" slot="media"><slot></slot></div></template>'), 
            __metadata('design:paramtypes', [Element])
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
    var FSListRow = (function () {
        function FSListRow() {
        }
        FSListRow = __decorate([
            aurelia_framework_1.customElement('fs-item-row'),
            aurelia_framework_1.inlineView('<template class="item-title-row col-fill"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListRow);
        return FSListRow;
    }());
    exports.FSListRow = FSListRow;
    var FSListSubtitle = (function () {
        function FSListSubtitle() {
        }
        FSListSubtitle = __decorate([
            aurelia_framework_1.customElement('fs-item-subtitle'),
            aurelia_framework_1.inlineView('<template class="item-subtitle block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListSubtitle);
        return FSListSubtitle;
    }());
    exports.FSListSubtitle = FSListSubtitle;
    var FSListText = (function () {
        function FSListText() {
        }
        FSListText = __decorate([
            aurelia_framework_1.customElement('fs-item-text'),
            aurelia_framework_1.inlineView('<template class="item-text block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSListText);
        return FSListText;
    }());
    exports.FSListText = FSListText;
    var FSListItem = (function () {
        function FSListItem(element) {
            this.element = element;
            this.class = '';
            this.icon = '';
            if (this.element.hasAttribute('card'))
                this.class += ' card';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListItem.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListItem.prototype, "icon", void 0);
        FSListItem = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-list-item'),
            aurelia_framework_1.useView('./fs-list-item.html'), 
            __metadata('design:paramtypes', [Element])
        ], FSListItem);
        return FSListItem;
    }());
    exports.FSListItem = FSListItem;
    var FSNavRight = (function () {
        function FSNavRight() {
            this.class = '';
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSNavRight.prototype, "class", void 0);
        FSNavRight = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-accordion-content'),
            aurelia_framework_1.inlineView('<template><div slot="accordion-content" class="accordion-item-content ${class}"><div class="content-block"><slot></slot></div></div></template>'), 
            __metadata('design:paramtypes', [])
        ], FSNavRight);
        return FSNavRight;
    }());
    exports.FSNavRight = FSNavRight;
    var FSListLink = (function () {
        function FSListLink(element) {
            this.element = element;
            this.class = '';
            this.icon = '';
            this.href = '#';
            this.openIn = 'picker';
            if (this.element.hasAttribute('card'))
                this.class += ' card';
            if (this.element.hasAttribute('accordion'))
                this.class += ' accordion-item';
        }
        FSListLink.prototype.bind = function () {
            if (this.element.hasAttribute('smart-select'))
                this.__link.classList.add('smart-select');
            if (this.element.hasAttribute('external'))
                this.__link.classList.add('external');
        };
        FSListLink.prototype.__fireClick = function () {
            return sigma_ui_frameseven_1.FSEvent.fireEvent('click', this.element);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], FSListLink.prototype, "class", void 0);
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
        ], FSListLink.prototype, "openIn", void 0);
        FSListLink = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-list-link'),
            aurelia_framework_1.useView('./fs-list-link.html'), 
            __metadata('design:paramtypes', [Element])
        ], FSListLink);
        return FSListLink;
    }());
    exports.FSListLink = FSListLink;
    var FSSearchbar = (function () {
        function FSSearchbar() {
            this.placeholder = 'Search...';
            this.buttonCancel = 'Cancel';
            this.searchList = '';
            this.searchIn = '.item-title,.item-subtitle,.item-text';
        }
        FSSearchbar.prototype.attached = function () {
            this.searchBar = framework7.searchbar(this.__form, {
                searchList: '.list-block-search' + this.searchList,
                searchIn: this.searchIn,
                onClear: this.onclear,
                onEnable: this.onenable,
                onDisable: this.ondisable,
                customSearch: isFunction(this.onsearch) ? this.onsearch : false
            });
        };
        FSSearchbar.prototype.disable = function () {
            this.searchBar.disable();
        };
        FSSearchbar.prototype.unbind = function () {
            this.searchBar.destroy();
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "onsearch", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "onenable", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "ondisable", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "onclear", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "buttonCancel", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "searchList", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], FSSearchbar.prototype, "searchIn", void 0);
        FSSearchbar = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('fs-searchbar'),
            aurelia_framework_1.useView('./fs-searchbar.html'), 
            __metadata('design:paramtypes', [])
        ], FSSearchbar);
        return FSSearchbar;
    }());
    exports.FSSearchbar = FSSearchbar;
});
