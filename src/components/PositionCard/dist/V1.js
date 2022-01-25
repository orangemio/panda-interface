"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var sdk_1 = require("@uniswap/sdk");
var rebass_1 = require("rebass");
var Column_1 = require("../Column");
var Button_1 = require("../Button");
var Row_1 = require("../Row");
var index_1 = require("./index");
var DoubleLogo_1 = require("../DoubleLogo");
var hooks_1 = require("../../hooks");
var styled_components_1 = require("styled-components");
function V1PositionCard(_a) {
    var token = _a.token, V1LiquidityBalance = _a.V1LiquidityBalance;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var chainId = hooks_1.useActiveWeb3React().chainId;
    return (react_1["default"].createElement(index_1.HoverCard, null,
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px" },
            react_1["default"].createElement(index_1.FixedHeightRow, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(DoubleLogo_1["default"], { currency0: token, margin: true, size: 20 }),
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20, style: { marginLeft: '' } }, (chainId && token.equals(sdk_1.WETH[chainId]) ? 'WETH' : token.symbol) + "/ETH"),
                    react_1["default"].createElement(rebass_1.Text, { fontSize: 12, fontWeight: 500, ml: "0.5rem", px: "0.75rem", py: "0.25rem", style: { borderRadius: '1rem' }, backgroundColor: theme.yellow1, color: 'black' }, "V1"))),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "8px" },
                react_1["default"].createElement(Row_1.RowBetween, { marginTop: "10px" },
                    react_1["default"].createElement(Button_1.ButtonSecondary, { width: "68%", as: react_router_dom_1.Link, to: "/migrate/v1/" + V1LiquidityBalance.token.address }, "Migrate"),
                    react_1["default"].createElement(Button_1.ButtonSecondary, { style: { backgroundColor: 'transparent' }, width: "28%", as: react_router_dom_1.Link, to: "/remove/v1/" + V1LiquidityBalance.token.address }, "Remove"))))));
}
exports["default"] = react_router_dom_1.withRouter(V1PositionCard);
