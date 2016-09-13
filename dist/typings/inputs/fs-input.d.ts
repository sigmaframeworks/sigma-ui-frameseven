export declare class FSGenericInput {
    element: Element;
    hideLabel: boolean;
    bind(): void;
}
export declare class FSInputLabel {
}
export declare class FSInput extends FSGenericInput {
    element: Element;
    constructor(element: Element);
}
export declare class FSPhone extends FSGenericInput {
    element: Element;
    __flag: string;
    __value: string;
    value: string;
    placeholder: string;
    model: any;
    constructor(element: Element);
    valueChanged(newValue: any): void;
    __format($event: any): void;
}
export declare class FSSwitch extends FSGenericInput {
    element: Element;
    checked: boolean;
    constructor(element: Element);
}
