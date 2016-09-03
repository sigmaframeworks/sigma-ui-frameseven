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
    var FSSwiper = (function () {
        function FSSwiper(element) {
            this.showPaginaton = false;
            this.showControls = false;
            this.showControls = element.hasAttribute('controls');
            this.showPaginaton = element.hasAttribute('pagination');
        }
        FSSwiper.prototype.attached = function () {
            this.__swiperObject = framework7.swiper(this.__container, {
                spaceBetween: 50,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                loop: true,
                lazyLoading: true,
                preloadImages: false,
                pagination: this.showPaginaton ? this.__pager : '',
                nextButton: this.showControls ? this.__next : '',
                prevButton: this.showControls ? this.__prev : ''
            });
        };
        FSSwiper = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('fs-swiper'), 
            __metadata('design:paramtypes', [Element])
        ], FSSwiper);
        return FSSwiper;
    }());
    exports.FSSwiper = FSSwiper;
    var FSSlide = (function () {
        function FSSlide() {
        }
        FSSlide.prototype.attached = function () {
        };
        FSSlide = __decorate([
            aurelia_framework_1.customElement('fs-slide'),
            aurelia_framework_1.inlineView('<template class="swiper-slide block"><slot></slot></template>'), 
            __metadata('design:paramtypes', [])
        ], FSSlide);
        return FSSlide;
    }());
    exports.FSSlide = FSSlide;
});
