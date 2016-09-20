export declare class FSList {
    element: Element;
    __searchable: any;
    constructor(element: Element);
}
export declare class FSListBlock {
}
export declare class FSListCard {
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
export declare class FSListRow {
}
export declare class FSListSubtitle {
}
export declare class FSListText {
}
export declare class FSListItem {
    element: Element;
    class: string;
    icon: string;
    constructor(element: Element);
}
export declare class FSListLink {
    element: Element;
    class: string;
    icon: string;
    href: string;
    openIn: string;
    private __link;
    constructor(element: Element);
    bind(): void;
    __fireClick(): any;
}
export declare class FSSearchbar {
    onsearch: any;
    onenable: any;
    ondisable: any;
    onclear: any;
    placeholder: string;
    buttonCancel: string;
    searchList: string;
    searchIn: string;
    __form: any;
    searchBar: any;
    attached(): void;
    unbind(): void;
}
