export declare class FSGenericInput {
    element: Element;
    hideLabel: boolean;
    bind(): void;
}
export declare class FSLink {
    private element;
    href: string;
    class: string;
    dataConfirm: string;
    dataConfirmTitle: string;
    dataCloseOnCancel: string;
    private __link;
    private __extraClasses;
    constructor(element: Element);
    attached(): void;
    __fireClick(): any;
}
export declare class FSButton {
    private element;
    href: string;
    class: string;
    __extraClasses: string;
    constructor(element: Element);
    __fireClick(): any;
}
export declare class FSInputLabel {
    width: string;
    bind(): void;
}
export declare class FSInput extends FSGenericInput {
    element: Element;
    icon: string;
    constructor(element: Element);
    attached(): void;
}
export declare class FSPhone {
    __flag: any;
    __value: string;
    element: HTMLInputElement;
    inputGroup: HTMLElement;
    constructor(element: Element);
    attached(): void;
    __format($event: any): void;
}
export declare class FSDate {
    __picker: any;
    element: HTMLInputElement;
    constructor(element: Element);
    attached(): void;
    unbind(): void;
}
export declare class FSSwitch extends FSGenericInput {
    element: Element;
    checked: boolean;
    constructor(element: Element);
    bind(): void;
}
