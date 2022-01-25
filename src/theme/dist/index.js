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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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
exports.ThemedGlobalStyle = exports.FixedGlobalStyle = exports.TYPE = exports.theme = exports.colors = void 0;
var polished_1 = require("polished");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../state/user/hooks");
var rebass_1 = require("rebass");
__exportStar(require("./components"), exports);
var MEDIA_WIDTHS = {
    upToExtraSmall: 500,
    upToSmall: 600,
    upToMedium: 960,
    upToLarge: 1280
};
var mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(function (accumulator, size) {
    ;
    accumulator[size] = function (a, b, c) { return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "], ["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "])), MEDIA_WIDTHS[size], styled_components_1.css(a, b, c)); };
    return accumulator;
}, {});
var white = '#FFFFFF';
var black = '#000000';
function colors(darkMode) {
    return {
        // base
        white: white,
        black: black,
        // text
        text1: darkMode ? '#FFFFFF' : '#000000',
        text2: darkMode ? '#C3C5CB' : '#565A69',
        text3: darkMode ? '#6C7284' : '#9a7c64',
        text4: darkMode ? '#565A69' : '#C3C5CB',
        text5: darkMode ? '#2C2F36' : '#e6ddd6',
        // backgrounds / greys
        bg1: darkMode ? '#212429' : '#FFFFFF',
        bg2: darkMode ? '#2C2F36' : '#f8fff6',
        bg3: darkMode ? '#40444F' : '#e6ddd6',
        bg4: darkMode ? '#565A69' : '#CED0D9',
        bg5: darkMode ? '#6C7284' : '#9a7c64',
        //specialty colors
        modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
        advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',
        //primary colors
        primary1: darkMode ? '#2172E5' : '#805e49',
        primary2: darkMode ? '#3680E7' : '#88715f',
        primary3: darkMode ? '#4D8FEA' : '#aa9585',
        primary4: darkMode ? '#376bad70' : '#e2d6cf',
        primary5: darkMode ? '#153d6f70' : '#f0e9e7',
        // color text
        primaryText1: darkMode ? '#6da8ff' : '#805e49',
        // secondary colors
        secondary1: darkMode ? '#2172E5' : '#805e49',
        secondary2: darkMode ? '#17000b26' : '#e2d6cf',
        secondary3: darkMode ? '#17000b26' : '#f0e9e7',
        // other
        red1: '#FF6871',
        red2: '#F82D3A',
        green1: '#27AE60',
        yellow1: '#FFE270',
        yellow2: '#F3841E'
        // dont wanna forget these blue yet
        // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
        // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
    };
}
exports.colors = colors;
function theme(darkMode) {
    return __assign(__assign({}, colors(darkMode)), { grids: {
            sm: 8,
            md: 12,
            lg: 24
        }, 
        //shadows
        shadow1: darkMode ? '#000' : '#2F80ED', 
        // media queries
        mediaWidth: mediaWidthTemplates, 
        // css snippets
        flexColumnNoWrap: styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: flex;\n      flex-flow: column nowrap;\n    "], ["\n      display: flex;\n      flex-flow: column nowrap;\n    "]))), flexRowNoWrap: styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: flex;\n      flex-flow: row nowrap;\n    "], ["\n      display: flex;\n      flex-flow: row nowrap;\n    "]))) });
}
exports.theme = theme;
function ThemeProvider(_a) {
    var children = _a.children;
    var darkMode = hooks_1.useIsDarkMode();
    var themeObject = react_1.useMemo(function () { return theme(darkMode); }, [darkMode]);
    return react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: themeObject }, children);
}
exports["default"] = ThemeProvider;
var TextWrapper = styled_components_1["default"](rebass_1.Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return theme[color];
});
exports.TYPE = {
    main: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: 'text2' }, props));
    },
    link: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: 'primary1' }, props));
    },
    black: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: 'text1' }, props));
    },
    body: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 400, fontSize: 16, color: 'text1' }, props));
    },
    largeHeader: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 600, fontSize: 24 }, props));
    },
    mediumHeader: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, fontSize: 20 }, props));
    },
    subHeader: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 400, fontSize: 14 }, props));
    },
    blue: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: 'primary1' }, props));
    },
    yellow: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: 'yellow1' }, props));
    },
    darkGray: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: 'text3' }, props));
    },
    gray: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: 'bg3' }, props));
    },
    italic: function (props) {
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, fontSize: 12, fontStyle: 'italic', color: 'text2' }, props));
    },
    error: function (_a) {
        var error = _a.error, props = __rest(_a, ["error"]);
        return react_1["default"].createElement(TextWrapper, __assign({ fontWeight: 500, color: error ? 'red1' : 'text2' }, props));
    }
};
exports.FixedGlobalStyle = styled_components_1.createGlobalStyle(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nhtml, input, textarea, button {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.018em;\n  font-display: fallback;\n}\n@supports (font-variation-settings: normal) {\n  html, input, textarea, button {\n    font-family: 'Inter var', sans-serif;\n  }\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  user-select: none;\n}\n\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n"], ["\nhtml, input, textarea, button {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.018em;\n  font-display: fallback;\n}\n@supports (font-variation-settings: normal) {\n  html, input, textarea, button {\n    font-family: 'Inter var', sans-serif;\n  }\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  user-select: none;\n}\n\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n"])));
exports.ThemedGlobalStyle = styled_components_1.createGlobalStyle(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\nhtml {\n  color: ", ";\n  background: url(/bg.png) top center white no-repeat;\n  background-size: cover;\n}\n\nbody {\n  min-height: 100vh;\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n  background-image: ", ";\n}\n"], ["\nhtml {\n  color: ", ";\n  background: url(/bg.png) top center white no-repeat;\n  background-size: cover;\n}\n\nbody {\n  min-height: 100vh;\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n  background-image: ",
    ";\n}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return "radial-gradient(50% 50% at 50% 50%, " + theme.primary5 + " 0%, " + polished_1.transparentize(1, theme.primary4) + " 100%)";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
