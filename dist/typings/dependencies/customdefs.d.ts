// Global methods
declare var __seed;
declare var Constants;

declare var Framework7: any;
declare var cordova: any;
declare var framework7: any;
declare var mainView: any;
declare var loginView: any;
declare function Dom7(...rest): any;

declare function TextComplete(el, strategies, options);


declare interface Window {

    cordova: any;
    framework7: any;
    mainView: any;
    loginView: any;

    __seed: number;
    Constants: any;
    FormData: any;
}
declare interface Element {
    au: any;
}

declare class Chart {
    constructor(el: any, opt: any);
}
