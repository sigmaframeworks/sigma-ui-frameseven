define(["require", "exports"], function (require, exports) {
    "use strict";
    var FSConstants;
    (function (FSConstants) {
        FSConstants.App = {
            Key: 'App',
            Title: 'Sigma UI FrameSeven',
            Version: '1.00'
        };
        FSConstants.Http = {
            BaseUrl: './',
            Headers: {},
            AuthorizationHeader: false
        };
        FSConstants.swipeMenu = false;
        FSConstants.menuPanel = 'left';
    })(FSConstants = exports.FSConstants || (exports.FSConstants = {}));
});
