// Global methods
declare var __seed;
declare var Constants;

declare var Framework7: any;
declare var cordova: any;
declare var device: any;
declare var framework7: any;
declare var mainView: any;
declare var loginView: any;
declare var Dom7: Dom7Static;

interface Dom7Static {
    (...rest): any;
    ajax(...rest): any;
    parseUrlQuery(...rest): any;
}

declare function TextComplete(el, strategies, options);

declare interface FSConfig {
    title(t: string): FSConfig;
    version(t: string): FSConfig;
    appKey(t: string): FSConfig;

    apiUrl(t: string): FSConfig;
    apiHeaders(t: any): FSConfig;
    addAuthHeader(t: boolean): FSConfig;
}

declare interface Window {
    cordova: any;
    device: any;
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
