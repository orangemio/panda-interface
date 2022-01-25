"use strict";
exports.__esModule = true;
exports.AdvancedSwapDetails = void 0;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var actions_1 = require("../../state/swap/actions");
var hooks_1 = require("../../state/user/hooks");
var theme_1 = require("../../theme");
var prices_1 = require("../../utils/prices");
var Column_1 = require("../Column");
var QuestionHelper_1 = require("../QuestionHelper");
var Row_1 = require("../Row");
var FormattedPriceImpact_1 = require("./FormattedPriceImpact");
var styleds_1 = require("./styleds");
var SwapRoute_1 = require("./SwapRoute");
function TradeSummary(_a) {
    var _b, _c, _d, _e;
    var trade = _a.trade, allowedSlippage = _a.allowedSlippage;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var _f = prices_1.computeTradePriceBreakdown(trade), priceImpactWithoutFee = _f.priceImpactWithoutFee, realizedLPFee = _f.realizedLPFee;
    var isExactIn = trade.tradeType === sdk_1.TradeType.EXACT_INPUT;
    var slippageAdjustedAmounts = prices_1.computeSlippageAdjustedAmounts(trade, allowedSlippage);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Column_1.AutoColumn, { style: { padding: '0 20px' } },
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, fontWeight: 400, color: theme.text2 }, isExactIn ? 'Minimum received' : 'Maximum sold'),
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed." })),
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { color: theme.text1, fontSize: 14 }, isExactIn
                        ? (_c = ((_b = slippageAdjustedAmounts[actions_1.Field.OUTPUT]) === null || _b === void 0 ? void 0 : _b.toSignificant(4)) + " " + trade.outputAmount.currency.symbol) !== null && _c !== void 0 ? _c : '-' : (_e = ((_d = slippageAdjustedAmounts[actions_1.Field.INPUT]) === null || _d === void 0 ? void 0 : _d.toSignificant(4)) + " " + trade.inputAmount.currency.symbol) !== null && _e !== void 0 ? _e : '-'))),
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, fontWeight: 400, color: theme.text2 }, "Price Impact"),
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "The difference between the market price and estimated price due to trade size." })),
                react_1["default"].createElement(FormattedPriceImpact_1["default"], { priceImpact: priceImpactWithoutFee })),
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, fontWeight: 400, color: theme.text2 }, "Liquidity Provider Fee"),
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive." })),
                react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, color: theme.text1 }, realizedLPFee ? realizedLPFee.toSignificant(4) + " " + trade.inputAmount.currency.symbol : '-')))));
}
function AdvancedSwapDetails(_a) {
    var trade = _a.trade;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var allowedSlippage = hooks_1.useUserSlippageTolerance()[0];
    var showRoute = Boolean(trade && trade.route.path.length > 2);
    return (react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" }, trade && (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TradeSummary, { trade: trade, allowedSlippage: allowedSlippage }),
        showRoute && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(styleds_1.SectionBreak, null),
            react_1["default"].createElement(Column_1.AutoColumn, { style: { padding: '0 24px' } },
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, fontWeight: 400, color: theme.text2 }, "Route"),
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "Routing through these tokens resulted in the best price for your trade." })),
                react_1["default"].createElement(SwapRoute_1["default"], { trade: trade }))))))));
}
exports.AdvancedSwapDetails = AdvancedSwapDetails;
