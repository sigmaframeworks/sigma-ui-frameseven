// UI Value Converters
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {FSFormat} from "./fs-formatters";
import {_, FSUtils} from "./fs-utils";

export class MarkdownValueConverter {
    toView(value: string) {
        let ret = FSFormat.toHTML(value || '');
        ret = ret.replace(/href\=\"tel\:(\+\d*)\"/g, 'onclick="confirmCall(\'$1\')"');
        ret = ret.replace(/a href=/g, 'a class="external" href="#" data-url=');
        return ret;
    }
}

export class CodeHighlightValueConverter {
    toView(value: string) {
        return FSFormat.mdHilight(value || '');
    }
}

// Dates
export class DateValueConverter {
    toView(value: string, format: string = 'DD MMM YYYY') {
        return FSFormat.date(value, format);
    }
}
export class DateFullValueConverter {
    toView(value: string, format: string = 'DD MMM YYYY hh:mm A') {
        return FSFormat.date(value, format);
    }
}
export class FromNowValueConverter {
    toView(value: string) {
        return FSFormat.fromNow(value);
    }
}

// Numbers
export class NumberValueConverter {
    toView(value: string, format?: string) {
        return FSFormat.number(value, format);
    }
}
export class CurrencyValueConverter {
    toView(value: string, symbol?: string, format?: string) {
        return FSFormat.currency(value, symbol, format);
    }
}
export class PercentValueConverter {
    toView(value: string) {
        return FSFormat.percent(value);
    }
}

// Objects/Arrays
export class KeysValueConverter {
    toView(object: any) {
        if (isEmpty(object)) return [];
        // if (object instanceof Map) return object.keys();
        return Object.keys(object);
    }
}
export class GroupValueConverter {
    toView(object: any, property: any): any {
        return _.groupBy(object, property);
    }
}

export class SortValueConverter {
    toView(value: any, property: any) {
        return _.sortBy(value, property);
    }
}

export class JsonValueConverter {
    toView(value: any) {
        return JSON.stringify(value, null, 4);
    }
}
export class IsStringValueConverter {
    toView(value: any) {
        return _.isString(value);
    }
}
export class IsEmptyValueConverter {
    toView(value: any) {
        return _.isEmpty(value);
    }
}
export class IsArrayValueConverter {
    toView(value: any) {
        return _.isArray(value);
    }
}
export class IsObjectValueConverter {
    toView(value: any) {
        return _.isObject(value);
    }
}
export class IsTrueValueConverter {
    toView(value: any) {
        return isTrue(value);
    }
}
export class IsFalseValueConverter {
    toView(value: any) {
        return !isTrue(value);
    }
}
