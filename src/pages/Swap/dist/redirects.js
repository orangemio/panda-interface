"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RedirectToSwap = exports.RedirectPathToSwapOnly = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
// Redirects to swap but only replace the pathname
function RedirectPathToSwapOnly(_a) {
    var location = _a.location;
    return react_1["default"].createElement(react_router_dom_1.Redirect, { to: __assign(__assign({}, location), { pathname: '/swap' }) });
}
exports.RedirectPathToSwapOnly = RedirectPathToSwapOnly;
// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
function RedirectToSwap(props) {
    var search = props.location.search, outputCurrency = props.match.params.outputCurrency;
    return (react_1["default"].createElement(react_router_dom_1.Redirect, { to: __assign(__assign({}, props.location), { pathname: '/swap', search: search && search.length > 1
                ? search + "&outputCurrency=" + outputCurrency
                : "?outputCurrency=" + outputCurrency }) }));
}
exports.RedirectToSwap = RedirectToSwap;
