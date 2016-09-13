// Utility Classes
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT

import {Lazy, Container, NewInstance, CompositionEngine, View, ViewCompiler, ViewResources, ViewSlot} from "aurelia-framework";
import {Origin} from "aurelia-metadata";
import * as ld from "lodash";
import * as km from "kramed";
import * as mm from "moment";
import * as nm from "numeral";

export var _ = ld;
export var kramed = km;
export var moment = mm;
export var numeral = nm;

window.isTrue = function(b: any): boolean {
    return (/^(true|yes|1|y|on)$/i).test(b);
};
window.isEmpty = function(a: any): boolean {
    if (typeof a === 'number') return false;
    return a === undefined || a === null || a === '' || Object.keys(a).length == 0 || a.length === 0;
};
window.isFunction = function(a: any): boolean {
    return _.isFunction(a);
}

window.getParentByTag = function(el, selector) {
    do {
        if (el.tagName.toLowerCase() === selector.toLowerCase()) return el;
        el = el.parentElement;
    } while (el !== null);
    return null;
};

window.getParentByClass = function(el, selector, last?) {
    do {
        if (last && el.classList.contains(last)) return null;
        if (el.classList.contains(selector)) return el;
        el = el.parentElement;
    } while (el !== null);
    return null;
};

Object.defineProperties(window, {
    '__seed': {
        writable: true,
        enumerable: false,
        value: 1
    },
    'Constants': {
        configurable: false,
        writable: false,
        enumerable: false,
        value: {}
    }
});

export module FSUtils {
    var __container: Container;

    export function container(container: Container) {
        __container = container;
    }

    export function lazy(T): any {
        if (!__container) {
            throw new Error('FSUtils.Lazy::Container not set');
        }
        return Lazy.of(T)
            .get(__container)();
    }

    export function newInstance(T, container): any {
        if (!container) {
            throw new Error('FSUtils.newInstance::Container not provided');
        }
        return NewInstance.of(T)
            .get(container);
    }

    let __compiler;
    let __resources;

    export function compileView(markup, container, vm?) {
        if (!__compiler) __compiler = lazy(ViewCompiler);
        if (!__resources) __resources = lazy(ViewResources);

        var viewFactory = __compiler.compile(`<template>${markup}</template>`, __resources);
        let view = viewFactory.create(__container);
        view.bind(vm);

        let slot = new ViewSlot(container, true);
        slot.add(view);
        slot.attached();
        if (isFunction(vm.attached)) vm.attached();

        return view;
    }

    export function getAscii(str): string {
        if (isEmpty(str)) return '';
        var conversions = {};
        conversions['ae'] = 'ä|æ|ǽ';
        conversions['oe'] = 'ö|œ';
        conversions['ue'] = 'ü';
        conversions['Ae'] = 'Ä';
        conversions['Ue'] = 'Ü';
        conversions['Oe'] = 'Ö';
        conversions['A'] = 'À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ';
        conversions['a'] = 'à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª';
        conversions['C'] = 'Ç|Ć|Ĉ|Ċ|Č';
        conversions['c'] = 'ç|ć|ĉ|ċ|č';
        conversions['D'] = 'Ð|Ď|Đ';
        conversions['d'] = 'ð|ď|đ';
        conversions['E'] = 'È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě';
        conversions['e'] = 'è|é|ê|ë|ē|ĕ|ė|ę|ě';
        conversions['G'] = 'Ĝ|Ğ|Ġ|Ģ';
        conversions['g'] = 'ĝ|ğ|ġ|ģ';
        conversions['H'] = 'Ĥ|Ħ';
        conversions['h'] = 'ĥ|ħ';
        conversions['I'] = 'Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ';
        conversions['i'] = 'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı';
        conversions['J'] = 'Ĵ';
        conversions['j'] = 'ĵ';
        conversions['K'] = 'Ķ';
        conversions['k'] = 'ķ';
        conversions['L'] = 'Ĺ|Ļ|Ľ|Ŀ|Ł';
        conversions['l'] = 'ĺ|ļ|ľ|ŀ|ł';
        conversions['N'] = 'Ñ|Ń|Ņ|Ň';
        conversions['n'] = 'ñ|ń|ņ|ň|ŉ';
        conversions['O'] = 'Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ';
        conversions['o'] = 'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º';
        conversions['R'] = 'Ŕ|Ŗ|Ř';
        conversions['r'] = 'ŕ|ŗ|ř';
        conversions['S'] = 'Ś|Ŝ|Ş|Š';
        conversions['s'] = 'ś|ŝ|ş|š|ſ';
        conversions['T'] = 'Ţ|Ť|Ŧ';
        conversions['t'] = 'ţ|ť|ŧ';
        conversions['U'] = 'Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ';
        conversions['u'] = 'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ';
        conversions['Y'] = 'Ý|Ÿ|Ŷ';
        conversions['y'] = 'ý|ÿ|ŷ';
        conversions['W'] = 'Ŵ';
        conversions['w'] = 'ŵ';
        conversions['Z'] = 'Ź|Ż|Ž';
        conversions['z'] = 'ź|ż|ž';
        conversions['AE'] = 'Æ|Ǽ';
        conversions['ss'] = 'ß';
        conversions['IJ'] = 'Ĳ';
        conversions['ij'] = 'ĳ';
        conversions['OE'] = 'Œ';
        conversions['f'] = 'ƒ';
        for (var i in conversions) {
            var re = new RegExp(conversions[i], "g");
            str = str.replace(re, i);
        }
        return str;
    }


    // LoDash Mixins
    _.mixin({
        'findByValues': function(collection, property, values) {
            if (_.isArray(collection)) {
                return _.filter(collection, function(item) {
                    return _.indexOf(values, item[property] + '') > -1;
                });
            }
            else {
                let ret = [];
                _.forEach(collection, function(list) {
                    ret.concat(_.filter(list, function(item) {
                        return _.indexOf(values, item[property] + '') > -1;
                    }));
                });
                return ret;
            }
        },
        'removeByValues': function(collection, property, values) {
            if (_.isArray(collection)) {
                return _.remove(collection, function(item) {
                    return _.indexOf(values, item[property] + '') > -1;
                }) || [];
            }
            else {
                let ret = [];
                _.forEach(collection, function(list, key) {
                    ret = ret.concat(_.remove(list, function(item) {
                        return _.indexOf(values, item[property] + '') > -1;
                    }));
                });
                return ret;
            }
        },
        'findDeep': function(collection, property, value) {
            if (_.isArray(collection)) {
                return _.find(collection, function(item) {
                    return item[property] + '' === value + '';
                });
            }
            else {
                let ret;
                _.forEach(collection, function(item) {
                    ret = _.find(item, v => {
                        return v[property] + '' === value + '';
                    });
                    return ret === undefined;
                });
                return ret;
            }
        }
    });


    // View realated hooks
    export function loadView(url, next, model?) {
        if (url.indexOf('.html') == -1 || url.indexOf('index.html') != -1) return next('');//url = "home/view.html";

        let __compositionEngine = lazy(CompositionEngine);

        framework7.showIndicator();
        let page = __getQueryParameters(url);
        let instruction: any = {
            viewModel: page.url.replace('.html', ''),
            container: __container,
            childContainer: __container.createChild(),
            model: model || page.data
        };
        __getViewModel(instruction)
            .then(newInstruction => {
                let viewModel: any = <any>newInstruction.viewModel;
                return __invokeLifecycle(viewModel, 'canActivate', instruction.model)
                    .then(canActivate => {
                        if (canActivate) {
                            return __compositionEngine.createController(instruction)
                                .then(controller => {
                                    // __invokeLifecycle(viewModel, 'activate', instruction.model);
                                    controller.automate();

                                    // __invokeLifecycle(viewModel, 'bind', instruction.model);
                                    next(controller.view['fragment']);

                                    // setTimeout(() => {
                                    // __invokeLifecycle(viewModel, 'attached', null);
                                    controller.view.attached();
                                    framework7.hideIndicator();
                                    // }, 200);
                                    return true;
                                });
                        } else {
                            framework7.hideIndicator();
                            next('');
                        }
                    });
            })
            .catch(e => {
                framework7.hideIndicator();
                next('');
            });
    }

    function __getQueryParameters(url) {
        let u = url.split('?');
        return {
            url: u[0],
            data: u.length == 1 ? {} : u[1].split("&").map(function(n) { return n = n.split("="), this[n[0]] = n[1], this }.bind({}))[0]
        }
    }

    function __getViewModel(instruction) {
        let __compositionEngine = lazy(CompositionEngine);

        if (typeof instruction.viewModel === 'function') {
            instruction.viewModel = Origin.get(instruction.viewModel).moduleId;
        }

        if (typeof instruction.viewModel === 'string') {
            return __compositionEngine.ensureViewModel(instruction);
        }

        return Promise.resolve(instruction);
    }

    function __invokeLifecycle(instance, name, model) {
        if (instance && typeof instance[name] === 'function') {
            let result = instance[name](model);

            if (result instanceof Promise) {
                return result;
            }

            if (result !== null && result !== undefined) {
                return Promise.resolve(result);
            }

            return Promise.resolve(true);
        }

        return Promise.resolve(true);
    }
}
