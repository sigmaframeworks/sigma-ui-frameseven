// FS Viewport
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {autoinject, singleton, bindable, customElement, containerless, Container,
    View,
    ViewCompiler,
    ViewResources,
    CompositionEngine,
    ViewSlot} from "aurelia-framework";
import {Origin} from "aurelia-metadata";
import {FSUtils, FSConstants} from "../sigma-ui-frameseven";

@singleton()
@autoinject()
@containerless()
@customElement('fs-viewport')
export class FSViewport {

    swipePanel;
    showSplashProgress = false;

    @bindable()
    class = "";

    @bindable()
    splashLoaderColor = "orange";

    @bindable()
    splashProgressColor = "multi";


    constructor(private element: Element, private container: Container) {
        FSUtils.container(container);

        if (element.hasAttribute('splash-progress')) this.showSplashProgress = true;
        if (element.hasAttribute('menu-start')) FSConstants.menuPanel = this.swipePanel = "left";
        if (element.hasAttribute('menu-end')) FSConstants.menuPanel = this.swipePanel = "right";
    }

    // Private methods
    attached() {
        document.addEventListener('deviceready', () => {
            this.init();
        }, false);
        if (!window.cordova) {
            setTimeout(() => {
                this.init();
            }, 100);
        }
    }
    init() {
        let isRtl = document.dir == "rtl";
        window.framework7 = new Framework7({
            rtl: isRtl,
            router: true,
            swipeout: false,
            sortable: false,
            swipePanel: isRtl ? (this.swipePanel == "left" ? "right" : "left") : this.swipePanel,
            notificationHold: 2500,
            imagesLazyLoadThreshold: 360,
            notificationCloseOnClick: true,
            materialPageLoadDelay: 100,
            material: Framework7.prototype.device.android,
            onAjaxStart: xhr => xhr.open('GET', 'blank.html'),
            preprocess: (content, url, next) => FSUtils.loadView(url, next),
            onPageBeforeRemove: (app, page) => {
                page.container.au.controller.unbind();
                page.container.au.controller.detached();
            }
        });
        if (this.showSplashProgress) framework7.showProgressbar('.fs-splash', this.splashProgressColor);

        if (Framework7.prototype.device.android) {
            document.addEventListener("backbutton", () => {
                Dom7(".back").click();
            }, false);
        }

        if (window.cordova && window.cordova.plugins.Keyboard) {
            // cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            cordova.plugins.Keyboard.disableScroll(false);
        }

        window.mainView = framework7.addView('.view-main', {
            // Because we want to use dynamic navbar, we need to enable it for this view:
            dynamicNavbar: false
        });

        window.loginView = framework7.addView('.view-alternate', {
            // Because we want to use dynamic navbar, we need to enable it for this view:
            dynamicNavbar: false
        });

        setTimeout(() => {
            Dom7(".ui-splash").remove();
        }, 1000);
    }

}
