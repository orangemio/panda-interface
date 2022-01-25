"use strict";
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var rebass_1 = require("rebass");
var Button_1 = require("../../components/Button");
var Card_1 = require("../../components/Card");
var Column_1 = require("../../components/Column");
var CurrencyLogo_1 = require("../../components/CurrencyLogo");
var NavigationTabs_1 = require("../../components/NavigationTabs");
var PositionCard_1 = require("../../components/PositionCard");
var Row_1 = require("../../components/Row");
var CurrencySearchModal_1 = require("../../components/SearchModal/CurrencySearchModal");
var Reserves_1 = require("../../data/Reserves");
var hooks_1 = require("../../hooks");
var hooks_2 = require("../../state/user/hooks");
var hooks_3 = require("../../state/wallet/hooks");
var theme_1 = require("../../theme");
var currencyId_1 = require("../../utils/currencyId");
var AppBody_1 = require("../AppBody");
var styleds_1 = require("../Pool/styleds");
var Fields;
(function (Fields) {
    Fields[Fields["TOKEN0"] = 0] = "TOKEN0";
    Fields[Fields["TOKEN1"] = 1] = "TOKEN1";
})(Fields || (Fields = {}));
function PoolFinder() {
    var _a;
    var account = hooks_1.useActiveWeb3React().account;
    var _b = react_1.useState(false), showSearch = _b[0], setShowSearch = _b[1];
    var _c = react_1.useState(Fields.TOKEN1), activeField = _c[0], setActiveField = _c[1];
    var _d = react_1.useState(sdk_1.ETHER), currency0 = _d[0], setCurrency0 = _d[1];
    var _e = react_1.useState(null), currency1 = _e[0], setCurrency1 = _e[1];
    var _f = Reserves_1.usePair(currency0 !== null && currency0 !== void 0 ? currency0 : undefined, currency1 !== null && currency1 !== void 0 ? currency1 : undefined), pairState = _f[0], pair = _f[1];
    var addPair = hooks_2.usePairAdder();
    react_1.useEffect(function () {
        if (pair) {
            addPair(pair);
        }
    }, [pair, addPair]);
    var validPairNoLiquidity = pairState === Reserves_1.PairState.NOT_EXISTS ||
        Boolean(pairState === Reserves_1.PairState.EXISTS &&
            pair &&
            sdk_1.JSBI.equal(pair.reserve0.raw, sdk_1.JSBI.BigInt(0)) &&
            sdk_1.JSBI.equal(pair.reserve1.raw, sdk_1.JSBI.BigInt(0)));
    var position = hooks_3.useTokenBalance(account !== null && account !== void 0 ? account : undefined, pair === null || pair === void 0 ? void 0 : pair.liquidityToken);
    var hasPosition = Boolean(position && sdk_1.JSBI.greaterThan(position.raw, sdk_1.JSBI.BigInt(0)));
    var handleCurrencySelect = react_1.useCallback(function (currency) {
        if (activeField === Fields.TOKEN0) {
            setCurrency0(currency);
        }
        else {
            setCurrency1(currency);
        }
    }, [activeField]);
    var handleSearchDismiss = react_1.useCallback(function () {
        setShowSearch(false);
    }, [setShowSearch]);
    var prerequisiteMessage = (react_1["default"].createElement(Card_1.LightCard, { padding: "45px 10px" },
        react_1["default"].createElement(rebass_1.Text, { textAlign: "center" }, !account ? 'Connect to a wallet to find pools' : 'Select a token to find your liquidity.')));
    return (react_1["default"].createElement(AppBody_1["default"], null,
        react_1["default"].createElement(NavigationTabs_1.FindPoolTabs, null),
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
            react_1["default"].createElement(Button_1.ButtonDropdownLight, { onClick: function () {
                    setShowSearch(true);
                    setActiveField(Fields.TOKEN0);
                } }, currency0 ? (react_1["default"].createElement(Row_1["default"], null,
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currency0 }),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, currency0.symbol))) : (react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, "Select a Token"))),
            react_1["default"].createElement(Column_1.ColumnCenter, null,
                react_1["default"].createElement(react_feather_1.Plus, { size: "16", color: "#888D9B" })),
            react_1["default"].createElement(Button_1.ButtonDropdownLight, { onClick: function () {
                    setShowSearch(true);
                    setActiveField(Fields.TOKEN1);
                } }, currency1 ? (react_1["default"].createElement(Row_1["default"], null,
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currency1 }),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, currency1.symbol))) : (react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, "Select a Token"))),
            hasPosition && (react_1["default"].createElement(Column_1.ColumnCenter, { style: { justifyItems: 'center', backgroundColor: '', padding: '12px 0px', borderRadius: '12px' } },
                react_1["default"].createElement(rebass_1.Text, { textAlign: "center", fontWeight: 500 }, "Pool Found!"))),
            currency0 && currency1 ? (pairState === Reserves_1.PairState.EXISTS ? (hasPosition && pair ? (react_1["default"].createElement(PositionCard_1.MinimalPositionCard, { pair: pair, border: "1px solid #CED0D9" })) : (react_1["default"].createElement(Card_1.LightCard, { padding: "45px 10px" },
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "sm", justify: "center" },
                    react_1["default"].createElement(rebass_1.Text, { textAlign: "center" }, "You don\u2019t have liquidity in this pool yet."),
                    react_1["default"].createElement(theme_1.StyledInternalLink, { to: "/add/" + currencyId_1.currencyId(currency0) + "/" + currencyId_1.currencyId(currency1) },
                        react_1["default"].createElement(rebass_1.Text, { textAlign: "center" }, "Add liquidity.")))))) : validPairNoLiquidity ? (react_1["default"].createElement(Card_1.LightCard, { padding: "45px 10px" },
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "sm", justify: "center" },
                    react_1["default"].createElement(rebass_1.Text, { textAlign: "center" }, "No pool found."),
                    react_1["default"].createElement(theme_1.StyledInternalLink, { to: "/add/" + currencyId_1.currencyId(currency0) + "/" + currencyId_1.currencyId(currency1) }, "Create pool.")))) : pairState === Reserves_1.PairState.INVALID ? (react_1["default"].createElement(Card_1.LightCard, { padding: "45px 10px" },
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "sm", justify: "center" },
                    react_1["default"].createElement(rebass_1.Text, { textAlign: "center", fontWeight: 500 }, "Invalid pair.")))) : pairState === Reserves_1.PairState.LOADING ? (react_1["default"].createElement(Card_1.LightCard, { padding: "45px 10px" },
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "sm", justify: "center" },
                    react_1["default"].createElement(rebass_1.Text, { textAlign: "center" },
                        "Loading",
                        react_1["default"].createElement(styleds_1.Dots, null))))) : null) : (prerequisiteMessage)),
        react_1["default"].createElement(CurrencySearchModal_1["default"], { isOpen: showSearch, onCurrencySelect: handleCurrencySelect, onDismiss: handleSearchDismiss, showCommonBases: true, selectedCurrency: (_a = (activeField === Fields.TOKEN0 ? currency1 : currency0)) !== null && _a !== void 0 ? _a : undefined })));
}
exports["default"] = PoolFinder;
