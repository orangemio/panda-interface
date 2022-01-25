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
exports.BackArrow = exports.Spinner = exports.ExternalLink = exports.StyledInternalLink = exports.LinkStyledButton = exports.CloseIcon = exports.Button = void 0;
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
var react_feather_1 = require("react-feather");
exports.Button = styled_components_1["default"].button.attrs(function (_a) {
    var warning = _a.warning, theme = _a.theme;
    return ({
        backgroundColor: warning ? theme.red1 : theme.primary1
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  :disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n  }\n"], ["\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  :disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n  }\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.white;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return polished_1.darken(0.05, backgroundColor);
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return polished_1.darken(0.1, backgroundColor);
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return theme.text4;
});
exports.CloseIcon = styled_components_1["default"](react_feather_1.X)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"
    // A button that triggers some onClick result, but looks like a link.
])));
// A button that triggers some onClick result, but looks like a link.
exports.LinkStyledButton = styled_components_1["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"], ["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"
    // An internal link from the react-router-dom library that is correctly styled
])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'default' : 'pointer');
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled ? theme.text2 : theme.primary1);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? null : 'underline');
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? null : 'underline');
});
// An internal link from the react-router-dom library that is correctly styled
exports.StyledInternalLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"], ["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
var StyledLink = styled_components_1["default"].a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"], ["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"
    /**
     * Outbound link that handles firing google analytics events
     */
])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
/**
 * Outbound link that handles firing google analytics events
 */
function ExternalLink(_a) {
    var _b = _a.target, target = _b === void 0 ? '_blank' : _b, href = _a.href, _c = _a.rel, rel = _c === void 0 ? 'noopener noreferrer' : _c, rest = __rest(_a, ["target", "href", "rel"]);
    var handleClick = react_1.useCallback(function (event) {
        // don't prevent default, don't redirect if it's a new tab
        if (target === '_blank' || event.ctrlKey || event.metaKey) {
            react_ga_1["default"].outboundLink({ label: href }, function () {
                console.debug('Fired outbound link event', href);
            });
        }
        else {
            event.preventDefault();
            // send a ReactGA event and then trigger a location change
            react_ga_1["default"].outboundLink({ label: href }, function () {
                window.location.href = href;
            });
        }
    }, [href, target]);
    return react_1["default"].createElement(StyledLink, __assign({ target: target, rel: rel, href: href, onClick: handleClick }, rest));
}
exports.ExternalLink = ExternalLink;
var rotate = styled_components_1.keyframes(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
exports.Spinner = styled_components_1["default"].img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"], ["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"])), rotate);
var BackArrowLink = styled_components_1["default"](exports.StyledInternalLink)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function BackArrow(_a) {
    var to = _a.to;
    return (react_1["default"].createElement(BackArrowLink, { to: to },
        react_1["default"].createElement(react_feather_1.ArrowLeft, null)));
}
exports.BackArrow = BackArrow;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
