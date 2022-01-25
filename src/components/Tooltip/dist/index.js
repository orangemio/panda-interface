"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.MouseoverTooltip = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Popover_1 = require("../Popover");
var TooltipContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"], ["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"])));
function Tooltip(_a) {
    var text = _a.text, rest = __rest(_a, ["text"]);
    return react_1["default"].createElement(Popover_1["default"], __assign({ content: react_1["default"].createElement(TooltipContainer, null, text) }, rest));
}
exports["default"] = Tooltip;
function MouseoverTooltip(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var _b = react_1.useState(false), show = _b[0], setShow = _b[1];
    var open = react_1.useCallback(function () { return setShow(true); }, [setShow]);
    var close = react_1.useCallback(function () { return setShow(false); }, [setShow]);
    return (react_1["default"].createElement(Tooltip, __assign({}, rest, { show: show }),
        react_1["default"].createElement("div", { onMouseEnter: open, onMouseLeave: close }, children)));
}
exports.MouseoverTooltip = MouseoverTooltip;
var templateObject_1;
