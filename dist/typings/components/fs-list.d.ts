export declare class FSList {
    element: Element;
    __searchable: any;
    constructor(element: Element);
}
export declare class FSListBlock {
}
export declare class FSListGroup {
    label: string;
}
export declare class FSListCard {
    element: Element;
    class: string;
    constructor(element: Element);
    bind(): void;
}
export declare class FSListItem {
    element: Element;
    class: string;
    private __listItem;
    constructor(element: Element);
    bind(): void;
}
export declare class FSListSwipeout {
    element: Element;
    class: string;
    private __listItem;
    constructor(element: Element);
    bind(): void;
    __fireEvent(event: any): any;
}
export declare class FSListLabel {
}
export declare class FSListDivider {
}
export declare class FSListMedia {
    element: Element;
    class: string;
    constructor(element: Element);
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
export declare class FSAccordionContent {
    class: string;
}
export declare class FSSwipeLeft {
}
export declare class FSSwipeRight {
}
export declare class FSListItemContent {
    icon: string;
}
export declare class FSListLink {
    element: Element;
    class: string;
    icon: string;
    href: string;
    dataOpenIn: string;
    dataSearchbar: string;
    dataSearchbarPlaceholder: string;
    dataPageTitle: string;
    dataBackText: string;
    dataBackOnSelect: string;
    private __link;
    constructor(element: Element);
    bind(): void;
    __fireEvent(event: any): any;
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
    disable(): void;
    unbind(): void;
}
