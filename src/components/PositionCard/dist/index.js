"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MinimalPositionCard = exports.HoverCard = exports.FixedHeightRow = void 0;
var sdk_1 = require("@uniswap/sdk");
var polished_1 = require("polished");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var react_router_dom_1 = require("react-router-dom");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var TotalSupply_1 = require("../../data/TotalSupply");
var hooks_1 = require("../../hooks");
var hooks_2 = require("../../state/wallet/hooks");
var theme_1 = require("../../theme");
var currencyId_1 = require("../../utils/currencyId");
var wrappedCurrency_1 = require("../../utils/wrappedCurrency");
var Button_1 = require("../Button");
var Card_1 = require("../Card");
var Column_1 = require("../Column");
var CurrencyLogo_1 = require("../CurrencyLogo");
var DoubleLogo_1 = require("../DoubleLogo");
var Row_1 = require("../Row");
var styleds_1 = require("../swap/styleds");
exports.FixedHeightRow = styled_components_1["default"](Row_1.RowBetween)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 24px;\n"], ["\n  height: 24px;\n"])));
exports.HoverCard = styled_components_1["default"](Card_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.06, theme.bg2);
});
function MinimalPositionCard(_a) {
    var pair = _a.pair, _b = _a.showUnwrapped, showUnwrapped = _b === void 0 ? false : _b, border = _a.border;
    var account = hooks_1.useActiveWeb3React().account;
    var currency0 = showUnwrapped ? pair.token0 : wrappedCurrency_1.unwrappedToken(pair.token0);
    var currency1 = showUnwrapped ? pair.token1 : wrappedCurrency_1.unwrappedToken(pair.token1);
    var _c = react_1.useState(false), showMore = _c[0], setShowMore = _c[1];
    var userPoolBalance = hooks_2.useTokenBalance(account !== null && account !== void 0 ? account : undefined, pair.liquidityToken);
    var totalPoolTokens = TotalSupply_1.useTotalSupply(pair.liquidityToken);
    var _d = !!pair &&
        !!totalPoolTokens &&
        !!userPoolBalance &&
        // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
        sdk_1.JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
        ? [
            pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
            pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false)
        ]
        : [undefined, undefined], token0Deposited = _d[0], token1Deposited = _d[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null, userPoolBalance && (react_1["default"].createElement(Card_1.GreyCard, { border: border },
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px" },
            react_1["default"].createElement(exports.FixedHeightRow, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16 }, "Your position"))),
            react_1["default"].createElement(exports.FixedHeightRow, { onClick: function () { return setShowMore(!showMore); } },
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(DoubleLogo_1["default"], { currency0: currency0, currency1: currency1, margin: true, size: 20 }),
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 },
                        currency0.symbol,
                        "/",
                        currency1.symbol)),
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, userPoolBalance ? userPoolBalance.toSignificant(4) : '-'))),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "4px" },
                react_1["default"].createElement(exports.FixedHeightRow, null,
                    react_1["default"].createElement(rebass_1.Text, { color: "#888D9B", fontSize: 16, fontWeight: 500 },
                        currency0.symbol,
                        ":"),
                    token0Deposited ? (react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(rebass_1.Text, { color: "#888D9B", fontSize: 16, fontWeight: 500, marginLeft: '6px' }, token0Deposited === null || token0Deposited === void 0 ? void 0 : token0Deposited.toSignificant(6)))) : ('-')),
                react_1["default"].createElement(exports.FixedHeightRow, null,
                    react_1["default"].createElement(rebass_1.Text, { color: "#888D9B", fontSize: 16, fontWeight: 500 },
                        currency1.symbol,
                        ":"),
                    token1Deposited ? (react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(rebass_1.Text, { color: "#888D9B", fontSize: 16, fontWeight: 500, marginLeft: '6px' }, token1Deposited === null || token1Deposited === void 0 ? void 0 : token1Deposited.toSignificant(6)))) : ('-'))))))));
}
exports.MinimalPositionCard = MinimalPositionCard;
function FullPositionCard(_a) {
    var pair = _a.pair, border = _a.border;
    var account = hooks_1.useActiveWeb3React().account;
    var currency0 = wrappedCurrency_1.unwrappedToken(pair.token0);
    var currency1 = wrappedCurrency_1.unwrappedToken(pair.token1);
    var _b = react_1.useState(false), showMore = _b[0], setShowMore = _b[1];
    var userPoolBalance = hooks_2.useTokenBalance(account !== null && account !== void 0 ? account : undefined, pair.liquidityToken);
    var totalPoolTokens = TotalSupply_1.useTotalSupply(pair.liquidityToken);
    var poolTokenPercentage = !!userPoolBalance && !!totalPoolTokens && sdk_1.JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
        ? new sdk_1.Percent(userPoolBalance.raw, totalPoolTokens.raw)
        : undefined;
    var _c = !!pair &&
        !!totalPoolTokens &&
        !!userPoolBalance &&
        // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
        sdk_1.JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
        ? [
            pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
            pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false)
        ]
        : [undefined, undefined], token0Deposited = _c[0], token1Deposited = _c[1];
    return (react_1["default"].createElement(exports.HoverCard, { border: border },
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px" },
            react_1["default"].createElement(exports.FixedHeightRow, { onClick: function () { return setShowMore(!showMore); }, style: { cursor: 'pointer' } },
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(DoubleLogo_1["default"], { currency0: currency0, currency1: currency1, margin: true, size: 20 }),
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, !currency0 || !currency1 ? react_1["default"].createElement(styleds_1.Dots, null, "Loading") : currency0.symbol + "/" + currency1.symbol)),
                react_1["default"].createElement(Row_1.RowFixed, null, showMore ? (react_1["default"].createElement(react_feather_1.ChevronUp, { size: "20", style: { marginLeft: '10px' } })) : (react_1["default"].createElement(react_feather_1.ChevronDown, { size: "20", style: { marginLeft: '10px' } })))),
            showMore && (react_1["default"].createElement(Column_1.AutoColumn, { gap: "8px" },
                react_1["default"].createElement(exports.FixedHeightRow, null,
                    react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 },
                            "Pooled ",
                            currency0.symbol,
                            ":")),
                    token0Deposited ? (react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500, marginLeft: '6px' }, token0Deposited === null || token0Deposited === void 0 ? void 0 : token0Deposited.toSignificant(6)),
                        react_1["default"].createElement(CurrencyLogo_1["default"], { size: "20px", style: { marginLeft: '8px' }, currency: currency0 }))) : ('-')),
                react_1["default"].createElement(exports.FixedHeightRow, null,
                    react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 },
                            "Pooled ",
                            currency1.symbol,
                            ":")),
                    token1Deposited ? (react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500, marginLeft: '6px' }, token1Deposited === null || token1Deposited === void 0 ? void 0 : token1Deposited.toSignificant(6)),
                        react_1["default"].createElement(CurrencyLogo_1["default"], { size: "20px", style: { marginLeft: '8px' }, currency: currency1 }))) : ('-')),
                react_1["default"].createElement(exports.FixedHeightRow, null,
                    react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 }, "Your pool tokens:"),
                    react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 }, userPoolBalance ? userPoolBalance.toSignificant(4) : '-')),
                react_1["default"].createElement(exports.FixedHeightRow, null,
                    react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 }, "Your pool share:"),
                    react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 }, poolTokenPercentage ? poolTokenPercentage.toFixed(2) + '%' : '-')),
                react_1["default"].createElement(Row_1.AutoRow, { justify: "center", marginTop: '10px' },
                    react_1["default"].createElement(theme_1.ExternalLink, { href: "https://uniswap.info/pair/" + pair.liquidityToken.address }, "View pool information \u2197")),
                react_1["default"].createElement(Row_1.RowBetween, { marginTop: "10px" },
                    react_1["default"].createElement(Button_1.ButtonSecondary, { as: react_router_dom_1.Link, to: "/add/" + currencyId_1.currencyId(currency0) + "/" + currencyId_1.currencyId(currency1), width: "48%" }, "Add"),
                    react_1["default"].createElement(Button_1.ButtonSecondary, { as: react_router_dom_1.Link, width: "48%", to: "/remove/" + currencyId_1.currencyId(currency0) + "/" + currencyId_1.currencyId(currency1) }, "Remove")))))));
}
exports["default"] = FullPositionCard;
var templateObject_1, templateObject_2;
