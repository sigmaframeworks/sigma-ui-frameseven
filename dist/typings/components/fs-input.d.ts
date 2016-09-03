export declare class FSInput {
    value: string;
    label: string;
    placeholder: string;
    type: string;
    width: string;
    private __input;
    constructor(element: Element);
    scrollIntoView(): void;
}
export declare class FSButton {
    element: Element;
    private __button;
    href: string;
    class: string;
    constructor(element: Element);
    bind(): void;
}
export declare class FSSwitch {
    checked: boolean;
}
