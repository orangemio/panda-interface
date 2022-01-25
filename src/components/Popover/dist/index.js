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
exports.__esModule = true;
var polished_1 = require("polished");
var react_1 = require("react");
var react_popper_1 = require("react-popper");
var styled_components_1 = require("styled-components");
var useInterval_1 = require("../../hooks/useInterval");
var portal_1 = require("@reach/portal");
var PopoverContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 9999;\n\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 4px 8px 0 ", ";\n  color: ", ";\n  border-radius: 8px;\n"], ["\n  z-index: 9999;\n\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 4px 8px 0 ", ";\n  color: ", ";\n  border-radius: 8px;\n"])), function (props) { return (props.show ? 'visible' : 'hidden'); }, function (props) { return (props.show ? 1 : 0); }, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.transparentize(0.9, theme.shadow1);
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
});
var ReferenceElement = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var Arrow = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ", ";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"], ["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ", ";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
function Popover(_a) {
    var _b, _c;
    var content = _a.content, show = _a.show, children = _a.children, _d = _a.placement, placement = _d === void 0 ? 'auto' : _d;
    var _e = react_1.useState(null), referenceElement = _e[0], setReferenceElement = _e[1];
    var _f = react_1.useState(null), popperElement = _f[0], setPopperElement = _f[1];
    var _g = react_1.useState(null), arrowElement = _g[0], setArrowElement = _g[1];
    var _h = react_popper_1.usePopper(referenceElement, popperElement, {
        placement: placement,
        strategy: 'fixed',
        modifiers: [
            { name: 'offset', options: { offset: [8, 8] } },
            { name: 'arrow', options: { element: arrowElement } }
        ]
    }), styles = _h.styles, update = _h.update, attributes = _h.attributes;
    var updateCallback = react_1.useCallback(function () {
        update && update();
    }, [update]);
    useInterval_1["default"](updateCallback, show ? 100 : null);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ReferenceElement, { ref: setReferenceElement }, children),
        react_1["default"].createElement(portal_1["default"], null,
            react_1["default"].createElement(PopoverContainer, __assign({ show: show, ref: setPopperElement, style: styles.popper }, attributes.popper),
                content,
                react_1["default"].createElement(Arrow, __assign({ className: "arrow-" + ((_c = (_b = attributes.popper) === null || _b === void 0 ? void 0 : _b['data-popper-placement']) !== null && _c !== void 0 ? _c : ''), ref: setArrowElement, style: styles.arrow }, attributes.arrow))))));
}
exports["default"] = Popover;
var templateObject_1, templateObject_2, templateObject_3;
