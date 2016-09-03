define(["require", "exports", "./fs-utils"], function (require, exports, fs_utils_1) {
    "use strict";
    var FSFormat;
    (function (FSFormat) {
        function toHTML(md) {
            return fs_utils_1.kramed(md);
        }
        FSFormat.toHTML = toHTML;
        function mdHilight(md) {
            return fs_utils_1.kramed(md || '', {});
        }
        FSFormat.mdHilight = mdHilight;
        function date(dt, ft) {
            if (ft === void 0) { ft = 'DD MMM YYYY hh:mm A'; }
            var x;
            return dt === null || !(x = fs_utils_1.moment(dt)).isValid() ? null : x.format(ft);
        }
        FSFormat.date = date;
        function dateToISO(dt) {
            var x;
            return dt === null || !(x = fs_utils_1.moment(dt)).isValid() ? null : x.toISOString();
        }
        FSFormat.dateToISO = dateToISO;
        function fromNow(dt) {
            var x;
            return dt === null || !(x = fs_utils_1.moment(dt)).isValid() ? '' : x.fromNow(false);
        }
        FSFormat.fromNow = fromNow;
        function number(nm, fm) {
            if (fm === void 0) { fm = '0,0[.]00'; }
            var ret = nm === null || isNaN(nm) ? '' : fs_utils_1.numeral(nm).format(fm);
            if (fm.indexOf('{') === 0) {
                var minlen = fm.length - 2;
                if (ret.length < minlen) {
                    ret = Array(minlen - ret.length + 1).join('0') + ret;
                }
            }
            ret.replace(/[^\d\.]+/g, function (txt) {
                return "<small>" + txt.toUpperCase() + "</small>";
            });
            return ret;
        }
        FSFormat.number = number;
        function currency(nm, sy, fm) {
            if (sy === void 0) { sy = '$'; }
            if (fm === void 0) { fm = '$ 0,0[.]00'; }
            return nm === null || isNaN(nm) ? '' :
                fs_utils_1.numeral(nm)
                    .format(fm)
                    .replace('$', sy)
                    .replace(/[^\d\.]+/g, function (txt) {
                    return "<small>" + txt.toUpperCase() + "</small>";
                });
        }
        FSFormat.currency = currency;
        function percent(nm) {
            return nm === null || isNaN(nm) ? '' :
                fs_utils_1.numeral(nm > 1 ? nm / 100 : nm)
                    .format('0.00 %');
        }
        FSFormat.percent = percent;
        function exRate(nm) {
            return nm === null || isNaN(nm) ? '' :
                fs_utils_1.numeral(nm > 0 ? 1 / nm : nm)
                    .format('0.0000[a]');
        }
        FSFormat.exRate = exRate;
    })(FSFormat = exports.FSFormat || (exports.FSFormat = {}));
});
