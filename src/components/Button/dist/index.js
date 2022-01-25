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
exports.ButtonRadio = exports.ButtonDropdownLight = exports.ButtonDropdown = exports.ButtonError = exports.ButtonConfirmed = exports.ButtonWhite = exports.ButtonEmpty = exports.ButtonOutlined = exports.ButtonPink = exports.ButtonSecondary = exports.ButtonGray = exports.ButtonLight = exports.ButtonPrimary = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
var Row_1 = require("../Row");
var react_feather_1 = require("react-feather");
var styled_components_2 = require("rebass/styled-components");
var Base = styled_components_1["default"](styled_components_2.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  width: ", ";\n  font-weight: 500;\n  text-align: center;\n  border-radius: 20px;\n  border-radius: ", ";\n  outline: none;\n  border: 1px solid transparent;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  &:disabled {\n    cursor: auto;\n  }\n\n  > * {\n    user-select: none;\n  }\n"], ["\n  padding: ", ";\n  width: ", ";\n  font-weight: 500;\n  text-align: center;\n  border-radius: 20px;\n  border-radius: ", ";\n  outline: none;\n  border: 1px solid transparent;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  &:disabled {\n    cursor: auto;\n  }\n\n  > * {\n    user-select: none;\n  }\n"])), function (_a) {
    var padding = _a.padding;
    return (padding ? padding : '18px');
}, function (_a) {
    var width = _a.width;
    return (width ? width : '100%');
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius && borderRadius;
});
exports.ButtonPrimary = styled_components_1["default"](Base)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n    box-shadow: none;\n    border: 1px solid transparent;\n    outline: none;\n    opacity: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n    box-shadow: none;\n    border: 1px solid transparent;\n    outline: none;\n    opacity: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.primary1);
}, function (_a) {
    var theme = _a.theme, altDisabledStyle = _a.altDisabledStyle;
    return (altDisabledStyle ? theme.primary1 : theme.bg3);
}, function (_a) {
    var theme = _a.theme, altDisabledStyle = _a.altDisabledStyle;
    return (altDisabledStyle ? 'white' : theme.text3);
}, function (_a) {
    var altDisabledStyle = _a.altDisabledStyle;
    return (altDisabledStyle ? '0.7' : '1');
});
exports.ButtonLight = styled_components_1["default"](Base)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  :disabled {\n    opacity: 0.4;\n    :hover {\n      cursor: auto;\n      background-color: ", ";\n      box-shadow: none;\n      border: 1px solid transparent;\n      outline: none;\n    }\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  :disabled {\n    opacity: 0.4;\n    :hover {\n      cursor: auto;\n      background-color: ", ";\n      box-shadow: none;\n      border: 1px solid transparent;\n      outline: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary5;
}, function (_a) {
    var theme = _a.theme;
    return theme.primaryText1;
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.03, theme.primary5);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.03, theme.primary5);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.03, theme.primary5);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.05, theme.primary5);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.05, theme.primary5);
}, function (_a) {
    var theme = _a.theme;
    return theme.primary5;
});
exports.ButtonGray = styled_components_1["default"](Base)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.05, theme.bg2);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.05, theme.bg2);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.05, theme.bg2);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.1, theme.bg2);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && polished_1.darken(0.1, theme.bg2);
});
exports.ButtonSecondary = styled_components_1["default"](Base)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  border-radius: 8px;\n  padding: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    opacity: 50%;\n    cursor: auto;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  border-radius: 8px;\n  padding: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary5;
}, function (_a) {
    var theme = _a.theme;
    return theme.primaryText1;
}, function (_a) {
    var padding = _a.padding;
    return (padding ? padding : '10px');
}, function (_a) {
    var theme = _a.theme;
    return theme.primary4;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary4;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary4;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary4;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary4;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary5;
});
exports.ButtonPink = styled_components_1["default"](Base)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    opacity: 50%;\n    cursor: auto;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
exports.ButtonOutlined = styled_components_1["default"](Base)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  background-color: transparent;\n  color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"], ["\n  border: 1px solid ", ";\n  background-color: transparent;\n  color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
});
exports.ButtonEmpty = styled_components_1["default"](Base)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:focus {\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:focus {\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return theme.advancedBG;
}, function (_a) {
    var theme = _a.theme;
    return theme.advancedBG;
}, function (_a) {
    var theme = _a.theme;
    return theme.advancedBG;
});
exports.ButtonWhite = styled_components_1["default"](Base)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  border: 1px solid #edeef2;\n  background-color: ", ";\n  color: black;\n\n  &:focus {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"], ["\n  border: 1px solid #edeef2;\n  background-color: ", ";\n  color: black;\n\n  &:focus {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, polished_1.darken(0.05, '#edeef2'), polished_1.darken(0.1, '#edeef2'), polished_1.darken(0.1, '#edeef2'));
var ButtonConfirmedStyle = styled_components_1["default"](Base)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return polished_1.lighten(0.5, theme.green1);
}, function (_a) {
    var theme = _a.theme;
    return theme.green1;
}, function (_a) {
    var theme = _a.theme;
    return theme.green1;
});
var ButtonErrorStyle = styled_components_1["default"](Base)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n    box-shadow: none;\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n    box-shadow: none;\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.red1;
}, function (_a) {
    var theme = _a.theme;
    return theme.red1;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.red1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.red1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.red1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.red1);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.red1);
}, function (_a) {
    var theme = _a.theme;
    return theme.red1;
}, function (_a) {
    var theme = _a.theme;
    return theme.red1;
});
function ButtonConfirmed(_a) {
    var confirmed = _a.confirmed, altDisabledStyle = _a.altDisabledStyle, rest = __rest(_a, ["confirmed", "altDisabledStyle"]);
    if (confirmed) {
        return react_1["default"].createElement(ButtonConfirmedStyle, __assign({}, rest));
    }
    else {
        return react_1["default"].createElement(exports.ButtonPrimary, __assign({}, rest, { altDisabledStyle: altDisabledStyle }));
    }
}
exports.ButtonConfirmed = ButtonConfirmed;
function ButtonError(_a) {
    var error = _a.error, rest = __rest(_a, ["error"]);
    if (error) {
        return react_1["default"].createElement(ButtonErrorStyle, __assign({}, rest));
    }
    else {
        return react_1["default"].createElement(exports.ButtonPrimary, __assign({}, rest));
    }
}
exports.ButtonError = ButtonError;
function ButtonDropdown(_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, children = _a.children, rest = __rest(_a, ["disabled", "children"]);
    return (react_1["default"].createElement(exports.ButtonPrimary, __assign({}, rest, { disabled: disabled }),
        react_1["default"].createElement(Row_1.RowBetween, null,
            react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } }, children),
            react_1["default"].createElement(react_feather_1.ChevronDown, { size: 24 }))));
}
exports.ButtonDropdown = ButtonDropdown;
function ButtonDropdownLight(_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, children = _a.children, rest = __rest(_a, ["disabled", "children"]);
    return (react_1["default"].createElement(exports.ButtonOutlined, __assign({}, rest, { disabled: disabled }),
        react_1["default"].createElement(Row_1.RowBetween, null,
            react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } }, children),
            react_1["default"].createElement(react_feather_1.ChevronDown, { size: 24 }))));
}
exports.ButtonDropdownLight = ButtonDropdownLight;
function ButtonRadio(_a) {
    var active = _a.active, rest = __rest(_a, ["active"]);
    if (!active) {
        return react_1["default"].createElement(exports.ButtonWhite, __assign({}, rest));
    }
    else {
        return react_1["default"].createElement(exports.ButtonPrimary, __assign({}, rest));
    }
}
exports.ButtonRadio = ButtonRadio;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
