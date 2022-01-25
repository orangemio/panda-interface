"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_window_1 = require("react-window");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../hooks");
var hooks_2 = require("../../state/lists/hooks");
var hooks_3 = require("../../state/user/hooks");
var hooks_4 = require("../../state/wallet/hooks");
var theme_1 = require("../../theme");
var Tokens_1 = require("../../hooks/Tokens");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
var CurrencyLogo_1 = require("../CurrencyLogo");
var Tooltip_1 = require("../Tooltip");
var styleds_1 = require("./styleds");
var Loader_1 = require("../Loader");
var utils_1 = require("../../utils");
function currencyKey(currency) {
    return currency instanceof sdk_1.Token ? currency.address : currency === sdk_1.ETHER ? 'ETHER' : '';
}
var StyledBalanceText = styled_components_1["default"](rebass_1.Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"], ["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"])));
var Tag = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
});
function Balance(_a) {
    var balance = _a.balance;
    return react_1["default"].createElement(StyledBalanceText, { title: balance.toExact() }, balance.toSignificant(4));
}
var TagContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
function TokenTags(_a) {
    var currency = _a.currency;
    if (!(currency instanceof hooks_2.WrappedTokenInfo)) {
        return react_1["default"].createElement("span", null);
    }
    var tags = currency.tags;
    if (!tags || tags.length === 0)
        return react_1["default"].createElement("span", null);
    var tag = tags[0];
    return (react_1["default"].createElement(TagContainer, null,
        react_1["default"].createElement(Tooltip_1.MouseoverTooltip, { text: tag.description },
            react_1["default"].createElement(Tag, { key: tag.id }, tag.name)),
        tags.length > 1 ? (react_1["default"].createElement(Tooltip_1.MouseoverTooltip, { text: tags
                .slice(1)
                .map(function (_a) {
                var name = _a.name, description = _a.description;
                return name + ": " + description;
            })
                .join('; \n') },
            react_1["default"].createElement(Tag, null, "..."))) : null));
}
function CurrencyRow(_a) {
    var currency = _a.currency, onSelect = _a.onSelect, isSelected = _a.isSelected, otherSelected = _a.otherSelected, style = _a.style;
    var _b = hooks_1.useActiveWeb3React(), account = _b.account, chainId = _b.chainId;
    var key = currencyKey(currency);
    var selectedTokenList = hooks_2.useSelectedTokenList();
    var isOnSelectedList = utils_1.isTokenOnList(selectedTokenList, currency);
    var customAdded = Tokens_1.useIsUserAddedToken(currency);
    var balance = hooks_4.useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currency);
    var removeToken = hooks_3.useRemoveUserAddedToken();
    var addToken = hooks_3.useAddUserToken();
    // only show add or remove buttons if not on selected list
    return (react_1["default"].createElement(styleds_1.MenuItem, { style: style, className: "token-item-" + key, onClick: function () { return (isSelected ? null : onSelect()); }, disabled: isSelected, selected: otherSelected },
        react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currency, size: '24px' }),
        react_1["default"].createElement(Column_1["default"], null,
            react_1["default"].createElement(rebass_1.Text, { title: currency.name, fontWeight: 500 }, currency.symbol),
            react_1["default"].createElement(styleds_1.FadedSpan, null,
                !isOnSelectedList && customAdded ? (react_1["default"].createElement(theme_1.TYPE.main, { fontWeight: 500 },
                    "Added by user",
                    react_1["default"].createElement(theme_1.LinkStyledButton, { onClick: function (event) {
                            event.stopPropagation();
                            if (chainId && currency instanceof sdk_1.Token)
                                removeToken(chainId, currency.address);
                        } }, "(Remove)"))) : null,
                !isOnSelectedList && !customAdded ? (react_1["default"].createElement(theme_1.TYPE.main, { fontWeight: 500 },
                    "Found by address",
                    react_1["default"].createElement(theme_1.LinkStyledButton, { onClick: function (event) {
                            event.stopPropagation();
                            if (currency instanceof sdk_1.Token)
                                addToken(currency);
                        } }, "(Add)"))) : null)),
        react_1["default"].createElement(TokenTags, { currency: currency }),
        react_1["default"].createElement(Row_1.RowFixed, { style: { justifySelf: 'flex-end' } }, balance ? react_1["default"].createElement(Balance, { balance: balance }) : account ? react_1["default"].createElement(Loader_1["default"], null) : null)));
}
function CurrencyList(_a) {
    var height = _a.height, currencies = _a.currencies, selectedCurrency = _a.selectedCurrency, onCurrencySelect = _a.onCurrencySelect, otherCurrency = _a.otherCurrency, fixedListRef = _a.fixedListRef, showETH = _a.showETH;
    var itemData = react_1.useMemo(function () { return (showETH ? __spreadArrays([sdk_1.Currency.ETHER], currencies) : currencies); }, [currencies, showETH]);
    var Row = react_1.useCallback(function (_a) {
        var data = _a.data, index = _a.index, style = _a.style;
        var currency = data[index];
        var isSelected = Boolean(selectedCurrency && sdk_1.currencyEquals(selectedCurrency, currency));
        var otherSelected = Boolean(otherCurrency && sdk_1.currencyEquals(otherCurrency, currency));
        var handleSelect = function () { return onCurrencySelect(currency); };
        return (react_1["default"].createElement(CurrencyRow, { style: style, currency: currency, isSelected: isSelected, onSelect: handleSelect, otherSelected: otherSelected }));
    }, [onCurrencySelect, otherCurrency, selectedCurrency]);
    var itemKey = react_1.useCallback(function (index, data) { return currencyKey(data[index]); }, []);
    return (react_1["default"].createElement(react_window_1.FixedSizeList, { height: height, ref: fixedListRef, width: "100%", itemData: itemData, itemCount: itemData.length, itemSize: 56, itemKey: itemKey }, Row));
}
exports["default"] = CurrencyList;
var templateObject_1, templateObject_2, templateObject_3;
