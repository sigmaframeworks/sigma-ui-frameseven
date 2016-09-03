import { Container } from "aurelia-framework";
export declare class FSViewport {
    private element;
    private container;
    swipePanel: any;
    showSplashProgress: boolean;
    class: string;
    splashLoaderColor: string;
    splashProgressColor: string;
    constructor(element: Element, container: Container);
    attached(): void;
    init(): void;
}
