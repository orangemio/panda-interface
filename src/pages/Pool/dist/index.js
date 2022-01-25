"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var NavigationTabs_1 = require("../../components/NavigationTabs");
var QuestionHelper_1 = require("../../components/QuestionHelper");
var PositionCard_1 = require("../../components/PositionCard");
var V1_1 = require("../../data/V1");
var hooks_1 = require("../../state/wallet/hooks");
var theme_1 = require("../../theme");
var rebass_1 = require("rebass");
var Card_1 = require("../../components/Card");
var Row_1 = require("../../components/Row");
var Button_1 = require("../../components/Button");
var Column_1 = require("../../components/Column");
var hooks_2 = require("../../hooks");
var Reserves_1 = require("../../data/Reserves");
var hooks_3 = require("../../state/user/hooks");
var AppBody_1 = require("../AppBody");
var styleds_1 = require("../../components/swap/styleds");
function Pool() {
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var account = hooks_2.useActiveWeb3React().account;
    // fetch the user's balances of all tracked V2 LP tokens
    var trackedTokenPairs = hooks_3.useTrackedTokenPairs();
    var tokenPairsWithLiquidityTokens = react_1.useMemo(function () { return trackedTokenPairs.map(function (tokens) { return ({ liquidityToken: hooks_3.toV2LiquidityToken(tokens), tokens: tokens }); }); }, [trackedTokenPairs]);
    var liquidityTokens = react_1.useMemo(function () { return tokenPairsWithLiquidityTokens.map(function (tpwlt) { return tpwlt.liquidityToken; }); }, [
        tokenPairsWithLiquidityTokens
    ]);
    var _a = hooks_1.useTokenBalancesWithLoadingIndicator(account !== null && account !== void 0 ? account : undefined, liquidityTokens), v2PairsBalances = _a[0], fetchingV2PairBalances = _a[1];
    // fetch the reserves for all V2 pools in which the user has a balance
    var liquidityTokensWithBalances = react_1.useMemo(function () {
        return tokenPairsWithLiquidityTokens.filter(function (_a) {
            var _b;
            var liquidityToken = _a.liquidityToken;
            return (_b = v2PairsBalances[liquidityToken.address]) === null || _b === void 0 ? void 0 : _b.greaterThan('0');
        });
    }, [tokenPairsWithLiquidityTokens, v2PairsBalances]);
    var v2Pairs = Reserves_1.usePairs(liquidityTokensWithBalances.map(function (_a) {
        var tokens = _a.tokens;
        return tokens;
    }));
    var v2IsLoading = fetchingV2PairBalances || (v2Pairs === null || v2Pairs === void 0 ? void 0 : v2Pairs.length) < liquidityTokensWithBalances.length || (v2Pairs === null || v2Pairs === void 0 ? void 0 : v2Pairs.some(function (V2Pair) { return !V2Pair; }));
    var allV2PairsWithLiquidity = v2Pairs.map(function (_a) {
        var pair = _a[1];
        return pair;
    }).filter(function (v2Pair) { return Boolean(v2Pair); });
    var hasV1Liquidity = V1_1.useUserHasLiquidityInAllTokens();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(AppBody_1["default"], null,
            react_1["default"].createElement(NavigationTabs_1.SwapPoolTabs, { active: 'pool' }),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "lg", justify: "center" },
                react_1["default"].createElement(Button_1.ButtonPrimary, { id: "join-pool-button", as: react_router_dom_1.Link, style: { padding: 16 }, to: "/add/ETH" },
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Add Liquidity")),
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px", style: { width: '100%' } },
                    react_1["default"].createElement(Row_1.RowBetween, { padding: '0 8px' },
                        react_1["default"].createElement(rebass_1.Text, { color: theme.text1, fontWeight: 500 }, "Your Liquidity"),
                        react_1["default"].createElement(QuestionHelper_1["default"], { text: "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below." })),
                    !account ? (react_1["default"].createElement(Card_1.LightCard, { padding: "40px" },
                        react_1["default"].createElement(theme_1.TYPE.body, { color: theme.text3, textAlign: "center" }, "Connect to a wallet to view your liquidity."))) : v2IsLoading ? (react_1["default"].createElement(Card_1.LightCard, { padding: "40px" },
                        react_1["default"].createElement(theme_1.TYPE.body, { color: theme.text3, textAlign: "center" },
                            react_1["default"].createElement(styleds_1.Dots, null, "Loading")))) : (allV2PairsWithLiquidity === null || allV2PairsWithLiquidity === void 0 ? void 0 : allV2PairsWithLiquidity.length) > 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null, allV2PairsWithLiquidity.map(function (v2Pair) { return (react_1["default"].createElement(PositionCard_1["default"], { key: v2Pair.liquidityToken.address, pair: v2Pair })); }))) : (react_1["default"].createElement(Card_1.LightCard, { padding: "40px" },
                        react_1["default"].createElement(theme_1.TYPE.body, { color: theme.text3, textAlign: "center" }, "No liquidity found."))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(rebass_1.Text, { textAlign: "center", fontSize: 14, style: { padding: '.5rem 0 .5rem 0' } },
                            hasV1Liquidity ? 'Uniswap V1 liquidity found!' : "Don't see a pool you joined?",
                            ' ',
                            react_1["default"].createElement(theme_1.StyledInternalLink, { id: "import-pool-link", to: hasV1Liquidity ? '/migrate/v1' : '/find' }, hasV1Liquidity ? 'Migrate now.' : 'Import it.'))))))));
}
exports["default"] = Pool;
