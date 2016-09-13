export declare class FSList {
}
export declare class FSListBlock {
}
export declare class FSListGroup {
    label: string;
}
export declare class FSListLabel {
}
export declare class FSListDivider {
}
export declare class FSListMedia {
}
export declare class FSListTitle {
}
export declare class FSListAfter {
}
export declare class FSListItem {
    icon: string;
}
export declare class FSListLink {
    element: Element;
    icon: string;
    href: string;
    class: string;
    private __link;
    constructor(element: Element);
    bind(): void;
}
