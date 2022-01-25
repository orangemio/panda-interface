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
var qs_1 = require("qs");
var react_1 = require("react");
var react_router_1 = require("react-router");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var useParsedQueryString_1 = require("../../hooks/useParsedQueryString");
var useToggledVersion_1 = require("../../hooks/useToggledVersion");
var theme_1 = require("../../theme");
var Card_1 = require("../Card");
var Column_1 = require("../Column");
function BetterTradeLink(_a) {
    var version = _a.version;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var location = react_router_1.useLocation();
    var search = useParsedQueryString_1["default"]();
    var linkDestination = react_1.useMemo(function () {
        return __assign(__assign({}, location), { search: "?" + qs_1.stringify(__assign(__assign({}, search), { use: version !== useToggledVersion_1.DEFAULT_VERSION ? version : undefined })) });
    }, [location, search, version]);
    return (react_1["default"].createElement(Card_1.YellowCard, { style: { marginTop: '12px', padding: '8px 4px' } },
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "sm", justify: "center", style: { alignItems: 'center', textAlign: 'center' } },
            react_1["default"].createElement(rebass_1.Text, { lineHeight: "145.23%;", fontSize: 14, fontWeight: 400, color: theme.text1 },
                "There is a better price for this trade on",
                ' ',
                react_1["default"].createElement(theme_1.StyledInternalLink, { to: linkDestination },
                    react_1["default"].createElement("b", null,
                        "Uniswap ",
                        version.toUpperCase(),
                        " \u2197"))))));
}
exports["default"] = BetterTradeLink;
