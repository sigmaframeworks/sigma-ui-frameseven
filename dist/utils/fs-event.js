define(["require", "exports", "./fs-utils", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, fs_utils_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var FSEvent;
    (function (FSEvent) {
        function fireEvent(event, element, data) {
            var e = aurelia_framework_1.DOM.createCustomEvent(event, { bubbles: true, cancelable: true, detail: data });
            return element.dispatchEvent(e);
        }
        FSEvent.fireEvent = fireEvent;
        var __ea;
        var __ob;
        function broadcast(event, data) {
            if (!__ea) {
                __ea = fs_utils_1.FSUtils.lazy(aurelia_event_aggregator_1.EventAggregator);
            }
            __ea.publish(event, data);
        }
        FSEvent.broadcast = broadcast;
        function observe(object, property) {
            if (!__ob) {
                __ob = fs_utils_1.FSUtils.lazy(aurelia_framework_1.BindingEngine);
            }
            return __ob.propertyObserver(object, property);
        }
        FSEvent.observe = observe;
        function subscribe(event, callback) {
            if (!__ea) {
                __ea = fs_utils_1.FSUtils.lazy(aurelia_event_aggregator_1.EventAggregator);
            }
            return __ea.subscribe(event, callback);
        }
        FSEvent.subscribe = subscribe;
    })(FSEvent = exports.FSEvent || (exports.FSEvent = {}));
});
