"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var theme_1 = require("../../theme");
var CurrencyLogo_1 = require("../CurrencyLogo");
exports["default"] = react_1.memo(function SwapRoute(_a) {
    var trade = _a.trade;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(rebass_1.Flex, { px: "1rem", py: "0.5rem", my: "0.5rem", style: { border: "1px solid " + theme.bg3, borderRadius: '1rem' }, flexWrap: "wrap", width: "100%", justifyContent: "space-evenly", alignItems: "center" }, trade.route.path.map(function (token, i, path) {
        var isLastItem = i === path.length - 1;
        return (react_1["default"].createElement(react_1.Fragment, { key: i },
            react_1["default"].createElement(rebass_1.Flex, { my: "0.5rem", alignItems: "center", style: { flexShrink: 0 } },
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: token, size: "1.5rem" }),
                react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, color: theme.text1, ml: "0.5rem" }, token.symbol)),
            isLastItem ? null : react_1["default"].createElement(react_feather_1.ChevronRight, { color: theme.text2 })));
    })));
});
