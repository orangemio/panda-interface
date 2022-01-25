"use strict";
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Column_1 = require("../../components/Column");
var Row_1 = require("../../components/Row");
var styleds_1 = require("../../components/SearchModal/styleds");
var V1_1 = require("../../data/V1");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var hooks_2 = require("../../state/lists/hooks");
var hooks_3 = require("../../state/wallet/hooks");
var theme_1 = require("../../theme");
var Card_1 = require("../../components/Card");
var AppBody_1 = require("../AppBody");
var EmptyState_1 = require("./EmptyState");
var V1_2 = require("../../components/PositionCard/V1");
var QuestionHelper_1 = require("../../components/QuestionHelper");
var styleds_2 = require("../../components/swap/styleds");
var hooks_4 = require("../../state/user/hooks");
var utils_1 = require("../../utils");
function MigrateV1() {
    var _a;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var _b = hooks_1.useActiveWeb3React(), account = _b.account, chainId = _b.chainId;
    var _c = react_1.useState(''), tokenSearch = _c[0], setTokenSearch = _c[1];
    var handleTokenSearchChange = react_1.useCallback(function (e) { return setTokenSearch(e.target.value); }, [setTokenSearch]);
    // automatically add the search token
    var token = Tokens_1.useToken(tokenSearch);
    var selectedTokenListTokens = hooks_2.useSelectedTokenList();
    var isOnSelectedList = utils_1.isTokenOnList(selectedTokenListTokens, token !== null && token !== void 0 ? token : undefined);
    var allTokens = Tokens_1.useAllTokens();
    var addToken = hooks_4.useAddUserToken();
    react_1.useEffect(function () {
        if (token && !isOnSelectedList && !allTokens[token.address]) {
            addToken(token);
        }
    }, [token, isOnSelectedList, addToken, allTokens]);
    // get V1 LP balances
    var V1Exchanges = V1_1.useAllTokenV1Exchanges();
    var V1LiquidityTokens = react_1.useMemo(function () {
        return chainId
            ? Object.keys(V1Exchanges).map(function (exchangeAddress) { return new sdk_1.Token(chainId, exchangeAddress, 18, 'UNI-V1', 'Uniswap V1'); })
            : [];
    }, [chainId, V1Exchanges]);
    var _d = hooks_3.useTokenBalancesWithLoadingIndicator(account !== null && account !== void 0 ? account : undefined, V1LiquidityTokens), V1LiquidityBalances = _d[0], V1LiquidityBalancesLoading = _d[1];
    var allV1PairsWithLiquidity = V1LiquidityTokens.filter(function (V1LiquidityToken) {
        var balance = V1LiquidityBalances === null || V1LiquidityBalances === void 0 ? void 0 : V1LiquidityBalances[V1LiquidityToken.address];
        return balance && sdk_1.JSBI.greaterThan(balance.raw, sdk_1.JSBI.BigInt(0));
    }).map(function (V1LiquidityToken) {
        var balance = V1LiquidityBalances[V1LiquidityToken.address];
        return balance ? (react_1["default"].createElement(V1_2["default"], { key: V1LiquidityToken.address, token: V1Exchanges[V1LiquidityToken.address], V1LiquidityBalance: balance })) : null;
    });
    // should never always be false, because a V1 exhchange exists for WETH on all testnets
    var isLoading = ((_a = Object.keys(V1Exchanges)) === null || _a === void 0 ? void 0 : _a.length) === 0 || V1LiquidityBalancesLoading;
    return (react_1["default"].createElement(AppBody_1.BodyWrapper, { style: { padding: 24 } },
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "16px" },
            react_1["default"].createElement(Row_1.AutoRow, { style: { alignItems: 'center', justifyContent: 'space-between' }, gap: "8px" },
                react_1["default"].createElement(theme_1.BackArrow, { to: "/pool" }),
                react_1["default"].createElement(theme_1.TYPE.mediumHeader, null, "Migrate V1 Liquidity"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "Migrate your liquidity tokens from Uniswap V1 to PandaSwap LP Token." }))),
            react_1["default"].createElement(theme_1.TYPE.body, { style: { marginBottom: 8, fontWeight: 400 } }, "For each pool shown below, click migrate to remove your liquidity from Uniswap V1 and deposit it into Uniswap V2."),
            !account ? (react_1["default"].createElement(Card_1.LightCard, { padding: "40px" },
                react_1["default"].createElement(theme_1.TYPE.body, { color: theme.text3, textAlign: "center" }, "Connect to a wallet to view your V1 liquidity."))) : isLoading ? (react_1["default"].createElement(Card_1.LightCard, { padding: "40px" },
                react_1["default"].createElement(theme_1.TYPE.body, { color: theme.text3, textAlign: "center" },
                    react_1["default"].createElement(styleds_2.Dots, null, "Loading")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(Row_1.AutoRow, null,
                    react_1["default"].createElement(styleds_1.SearchInput, { value: tokenSearch, onChange: handleTokenSearchChange, placeholder: "Enter a token address to find liquidity" })),
                (allV1PairsWithLiquidity === null || allV1PairsWithLiquidity === void 0 ? void 0 : allV1PairsWithLiquidity.length) > 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null, allV1PairsWithLiquidity)) : (react_1["default"].createElement(EmptyState_1.EmptyState, { message: "No V1 Liquidity found." })))))));
}
exports["default"] = MigrateV1;
