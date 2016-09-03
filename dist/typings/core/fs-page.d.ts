import { FSConstants } from "../sigma-ui-frameseven";
export declare class FSPage {
    element: Element;
    pageTitle: string;
    dataPage: string;
    hideHeader: boolean;
    hideMenu: boolean;
    showBack: boolean;
    showToolbar: boolean;
    popup: boolean;
    constants: typeof FSConstants;
    framework7: any;
    constructor(element: Element);
}
