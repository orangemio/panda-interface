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
var qs_1 = require("qs");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var useParsedQueryString_1 = require("../../hooks/useParsedQueryString");
var useToggledVersion_1 = require("../../hooks/useToggledVersion");
var Tooltip_1 = require("../Tooltip");
var VersionLabel = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0.35rem 0.6rem;\n  border-radius: 12px;\n  background: ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: ", ";\n  :hover {\n    user-select: ", ";\n    background: ", ";\n    color: ", ";\n  }\n"], ["\n  padding: 0.35rem 0.6rem;\n  border-radius: 12px;\n  background: ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: ", ";\n  :hover {\n    user-select: ", ";\n    background: ", ";\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, enabled = _a.enabled;
    return (enabled ? theme.primary1 : 'none');
}, function (_a) {
    var theme = _a.theme, enabled = _a.enabled;
    return (enabled ? theme.white : theme.text1);
}, function (_a) {
    var enabled = _a.enabled;
    return (enabled ? '500' : '400');
}, function (_a) {
    var enabled = _a.enabled;
    return (enabled ? 'none' : 'initial');
}, function (_a) {
    var theme = _a.theme, enabled = _a.enabled;
    return (enabled ? theme.primary1 : 'none');
}, function (_a) {
    var theme = _a.theme, enabled = _a.enabled;
    return (enabled ? theme.white : theme.text1);
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var VersionToggle = styled_components_1["default"](function (_a) {
    var enabled = _a.enabled, rest = __rest(_a, ["enabled"]);
    return react_1["default"].createElement(react_router_dom_1.Link, __assign({}, rest));
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 12px;\n  opacity: ", ";\n  cursor: ", ";\n  background: ", ";\n  color: ", ";\n  display: flex;\n  width: fit-content;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  :hover {\n    text-decoration: none;\n  }\n"], ["\n  border-radius: 12px;\n  opacity: ", ";\n  cursor: ", ";\n  background: ", ";\n  color: ", ";\n  display: flex;\n  width: fit-content;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  :hover {\n    text-decoration: none;\n  }\n"])), function (_a) {
    var enabled = _a.enabled;
    return (enabled ? 1 : 0.5);
}, function (_a) {
    var enabled = _a.enabled;
    return (enabled ? 'pointer' : 'default');
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
function VersionSwitch() {
    var version = useToggledVersion_1["default"]();
    var location = react_router_dom_1.useLocation();
    var query = useParsedQueryString_1["default"]();
    var versionSwitchAvailable = location.pathname === '/swap' || location.pathname === '/send';
    var toggleDest = react_1.useMemo(function () {
        return versionSwitchAvailable
            ? __assign(__assign({}, location), { search: "?" + qs_1.stringify(__assign(__assign({}, query), { use: version === useToggledVersion_1.Version.v1 ? undefined : useToggledVersion_1.Version.v1 })) }) : location;
    }, [location, query, version, versionSwitchAvailable]);
    var handleClick = react_1.useCallback(function (e) {
        if (!versionSwitchAvailable)
            e.preventDefault();
    }, [versionSwitchAvailable]);
    var toggle = (react_1["default"].createElement(VersionToggle, { enabled: versionSwitchAvailable, to: toggleDest, onClick: handleClick },
        react_1["default"].createElement(VersionLabel, { enabled: version === useToggledVersion_1.Version.v2 || !versionSwitchAvailable }, "V2"),
        react_1["default"].createElement(VersionLabel, { enabled: version === useToggledVersion_1.Version.v1 && versionSwitchAvailable }, "V1")));
    return versionSwitchAvailable ? (toggle) : (react_1["default"].createElement(Tooltip_1.MouseoverTooltip, { text: "This page is only compatible with PandaSwap LP Token." }, toggle));
}
exports["default"] = VersionSwitch;
var templateObject_1, templateObject_2;
