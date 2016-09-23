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
import {FSUtils, FSEvent, FSConstants} from "../sigma-ui-frameseven";

@singleton()
@autoinject()
@containerless()
@customElement('fs-viewport')
export class FSViewport {

  swipePanel;
  swipeMenu = false;
  showSplashProgress = false;

  @bindable()
  class = "";

  @bindable()
  splashProgressColor = "multi";


  constructor(private element: Element, private container: Container) {
    FSUtils.container(container);

    if (element.hasAttribute('swipe-menu')) FSConstants.swipeMenu = this.swipeMenu = true;
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
  f7;
  init() {
    // TODO: Make sure all init options are customizable and in place
    let isRtl = document.dir == "rtl";
    this.f7 = window.framework7 = new Framework7({
      rtl: isRtl,
      router: true,
      swipeout: false,
      sortable: false,
      swipePanelActiveArea: 44,
      swipePanel: this.swipeMenu ? (isRtl ? (this.swipePanel == "left" ? "right" : "left") : this.swipePanel) : false,
      notificationHold: 2500,
      imagesLazyLoadThreshold: 150,
      notificationCloseOnClick: true,
      modalTitle: FSConstants.App.Title,
      materialPageLoadDelay: 100,
      material: Framework7.prototype.device.android,
      onAjaxStart: xhr => xhr.open('GET', 'blank.html'),
      preprocess: (content, url, next) => FSUtils.loadView(url, next),
      onPageBeforeRemove: (app, page) => {
        page.container.au.controller.unbind();
        page.container.au.controller.detached();
      }
    });
    framework7.menuPanel = "panel-" + (framework7.rtl ? (FSConstants.menuPanel == "left" ? "right" : "left") : FSConstants.menuPanel);
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
      dynamicNavbar: false,
      uniqueHistory: true
    });

    window.loginView = framework7.addView('.view-alternate', {
      // Because we want to use dynamic navbar, we need to enable it for this view:
      dynamicNavbar: false,
      uniqueHistory: true
    });
    FSEvent.fireEvent('appready', this.element);
  }

}
