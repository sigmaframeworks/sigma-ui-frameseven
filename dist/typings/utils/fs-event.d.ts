import { PropertyObserver } from "aurelia-framework";
import { Subscription } from "aurelia-event-aggregator";
export declare module FSEvent {
    function fireEvent(event: string, element: EventTarget, data?: any): any;
    function broadcast(event: any, data: any): void;
    function observe(object: any, property: any): PropertyObserver;
    function subscribe(event: any, callback: any): Subscription;
    function queueTask(fn: any): void;
}
