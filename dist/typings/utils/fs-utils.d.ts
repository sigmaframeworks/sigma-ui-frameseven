import { Container } from "aurelia-framework";
import * as ld from "lodash";
import * as mm from "moment";
import * as nm from "numeral";
export declare var _: ld.LoDashStatic;
export declare var kramed: KramedStatic;
export declare var moment: typeof mm;
export declare var numeral: nm.Numeral;
export declare module FSUtils {
    function container(container: Container): void;
    function lazy(T: any): any;
    function newInstance(T: any, container: any): any;
    function compileView(markup: any, container: any, vm?: any): any;
    function getAscii(str: any): string;
    function loadView(url: any, next: any, model?: any): any;
}
