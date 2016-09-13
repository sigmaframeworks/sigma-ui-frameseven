// FS Swiper
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {autoinject, customElement, containerless, bindable, inlineView, useView} from "aurelia-framework";

@autoinject()
@customElement('fs-swiper')
export class FSSwiper {
    showPaginaton = false;
    showControls = false;

    private __swiperObject;
    private __container;
    private __pager;
    private __prev;
    private __next;

    constructor(element: Element) {
        this.showControls = element.hasAttribute('controls');
        this.showPaginaton = element.hasAttribute('pagination');
    }

    attached() {
        this.__swiperObject = framework7.swiper(this.__container, {
            spaceBetween: 20,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true,
            lazyLoading: true,
            preloadImages: false,
            effect: 'slide',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 1,
            pagination: this.showPaginaton ? this.__pager : '',
            nextButton: this.showControls ? this.__next : '',
            prevButton: this.showControls ? this.__prev : ''
        });
    }
}

@customElement('fs-slide')
@inlineView('<template class="swiper-slide block"><slot></slot></template>')
export class FSSlide {
    attached() {
    }
}
