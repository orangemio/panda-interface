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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var BAD_SRCS = {};
/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */
function Logo(_a) {
    var srcs = _a.srcs, alt = _a.alt, rest = __rest(_a, ["srcs", "alt"]);
    var _b = react_1.useState(0), refresh = _b[1];
    var src = srcs.find(function (src) { return !BAD_SRCS[src]; });
    if (src) {
        return (react_1["default"].createElement("img", __assign({}, rest, { alt: alt, src: src, onError: function () {
                if (src)
                    BAD_SRCS[src] = true;
                refresh(function (i) { return i + 1; });
            } })));
    }
    return react_1["default"].createElement(react_feather_1.HelpCircle, __assign({}, rest));
}
exports["default"] = Logo;
