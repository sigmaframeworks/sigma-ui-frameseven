import { FSConstants } from "../sigma-ui-frameseven";
export declare class FSPage {
    element: Element;
    dataPage: string;
    constants: typeof FSConstants;
    framework7: any;
    constructor(element: Element);
    unbind(): void;
    detached(): void;
    attached(): void;
}
export declare class FSPopup {
    element: Element;
    dataPage: string;
    constants: typeof FSConstants;
    framework7: any;
    constructor(element: Element);
    unbind(): void;
    detached(): void;
    attached(): void;
    close(): void;
}
export declare class FSNavBar {
    navTitle: string;
}
export declare class FSNavLeft {
}
export declare class FSNavRight {
}
export declare class FSNavTool {
    element: Element;
    iconClass: string;
    dataClass: string;
    menuPanel: string;
    constructor(element: Element);
    __fireClick(): any;
}
export declare class FSPageContent {
    element: Element;
    hasPtr: boolean;
    constructor(element: Element);
    refreshDone(): void;
}
export declare class FSToolbar {
}
export declare class FSTabContent {
}
export declare class FSTabbar {
    private element;
    constructor(element: Element);
}
export declare class FSTab {
}
export declare class FSTabLink {
    private element;
    href: string;
    class: string;
    icon: string;
    label: string;
    badgeClass: string;
    badgeValue: string;
    constructor(element: Element);
    __fireClick(): any;
}
export declare class FSRow {
    element: Element;
    constructor(element: Element);
}
export declare class FSColumn {
    element: Element;
    width: string;
    constructor(element: Element);
}
