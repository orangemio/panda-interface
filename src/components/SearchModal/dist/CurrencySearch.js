"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CurrencySearch = void 0;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var react_i18next_1 = require("react-i18next");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var hooks_2 = require("../../state/lists/hooks");
var theme_1 = require("../../theme");
var utils_1 = require("../../utils");
var Card_1 = require("../Card");
var Column_1 = require("../Column");
var ListLogo_1 = require("../ListLogo");
var QuestionHelper_1 = require("../QuestionHelper");
var Row_1 = require("../Row");
var CommonBases_1 = require("./CommonBases");
var CurrencyList_1 = require("./CurrencyList");
var filtering_1 = require("./filtering");
var SortButton_1 = require("./SortButton");
var sorting_1 = require("./sorting");
var styleds_1 = require("./styleds");
var react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
function CurrencySearch(_a) {
    var selectedCurrency = _a.selectedCurrency, onCurrencySelect = _a.onCurrencySelect, otherSelectedCurrency = _a.otherSelectedCurrency, showCommonBases = _a.showCommonBases, onDismiss = _a.onDismiss, isOpen = _a.isOpen, onChangeList = _a.onChangeList;
    var t = react_i18next_1.useTranslation().t;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var fixedList = react_1.useRef();
    var _b = react_1.useState(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = react_1.useState(false), invertSearchOrder = _c[0], setInvertSearchOrder = _c[1];
    var allTokens = Tokens_1.useAllTokens();
    // if they input an address, use it
    var isAddressSearch = utils_1.isAddress(searchQuery);
    var searchToken = Tokens_1.useToken(searchQuery);
    react_1.useEffect(function () {
        if (isAddressSearch) {
            react_ga_1["default"].event({
                category: 'Currency Select',
                action: 'Search by address',
                label: isAddressSearch
            });
        }
    }, [isAddressSearch]);
    var showETH = react_1.useMemo(function () {
        var s = searchQuery.toLowerCase().trim();
        return s === '' || s === 'e' || s === 'et' || s === 'eth';
    }, [searchQuery]);
    var tokenComparator = sorting_1.useTokenComparator(invertSearchOrder);
    var filteredTokens = react_1.useMemo(function () {
        if (isAddressSearch)
            return searchToken ? [searchToken] : [];
        return filtering_1.filterTokens(Object.values(allTokens), searchQuery);
    }, [isAddressSearch, searchToken, allTokens, searchQuery]);
    var filteredSortedTokens = react_1.useMemo(function () {
        if (searchToken)
            return [searchToken];
        var sorted = filteredTokens.sort(tokenComparator);
        var symbolMatch = searchQuery
            .toLowerCase()
            .split(/\s+/)
            .filter(function (s) { return s.length > 0; });
        if (symbolMatch.length > 1)
            return sorted;
        return __spreadArrays((searchToken ? [searchToken] : []), sorted.filter(function (token) { var _a; return ((_a = token.symbol) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === symbolMatch[0]; }), sorted.filter(function (token) { var _a; return ((_a = token.symbol) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== symbolMatch[0]; }));
    }, [filteredTokens, searchQuery, searchToken, tokenComparator]);
    var handleCurrencySelect = react_1.useCallback(function (currency) {
        onCurrencySelect(currency);
        onDismiss();
    }, [onDismiss, onCurrencySelect]);
    // clear the input on open
    react_1.useEffect(function () {
        if (isOpen)
            setSearchQuery('');
    }, [isOpen]);
    // manage focus on modal show
    var inputRef = react_1.useRef();
    var handleInput = react_1.useCallback(function (event) {
        var _a;
        var input = event.target.value;
        var checksummedInput = utils_1.isAddress(input);
        setSearchQuery(checksummedInput || input);
        (_a = fixedList.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0);
    }, []);
    var handleEnter = react_1.useCallback(function (e) {
        var _a;
        if (e.key === 'Enter') {
            var s = searchQuery.toLowerCase().trim();
            if (s === 'eth') {
                handleCurrencySelect(sdk_1.ETHER);
            }
            else if (filteredSortedTokens.length > 0) {
                if (((_a = filteredSortedTokens[0].symbol) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === searchQuery.trim().toLowerCase() ||
                    filteredSortedTokens.length === 1) {
                    handleCurrencySelect(filteredSortedTokens[0]);
                }
            }
        }
    }, [filteredSortedTokens, handleCurrencySelect, searchQuery]);
    var selectedListInfo = hooks_2.useSelectedListInfo();
    return (react_1["default"].createElement(Column_1["default"], { style: { width: '100%', flex: '1 1' } },
        react_1["default"].createElement(styleds_1.PaddedColumn, { gap: "14px" },
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16 },
                    "Select a token",
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "Find a token by searching for its name or symbol or by pasting its address below." })),
                react_1["default"].createElement(theme_1.CloseIcon, { onClick: onDismiss })),
            react_1["default"].createElement(styleds_1.SearchInput, { type: "text", id: "token-search-input", placeholder: t('tokenSearchPlaceholder'), value: searchQuery, ref: inputRef, onChange: handleInput, onKeyDown: handleEnter }),
            showCommonBases && (react_1["default"].createElement(CommonBases_1["default"], { chainId: chainId, onSelect: handleCurrencySelect, selectedCurrency: selectedCurrency })),
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(rebass_1.Text, { fontSize: 14, fontWeight: 500 }, "Token Name"),
                react_1["default"].createElement(SortButton_1["default"], { ascending: invertSearchOrder, toggleSortOrder: function () { return setInvertSearchOrder(function (iso) { return !iso; }); } }))),
        react_1["default"].createElement(styleds_1.Separator, null),
        react_1["default"].createElement("div", { style: { flex: '1' } },
            react_1["default"].createElement(react_virtualized_auto_sizer_1["default"], { disableWidth: true }, function (_a) {
                var height = _a.height;
                return (react_1["default"].createElement(CurrencyList_1["default"], { height: height, showETH: showETH, currencies: filteredSortedTokens, onCurrencySelect: handleCurrencySelect, otherCurrency: otherSelectedCurrency, selectedCurrency: selectedCurrency, fixedListRef: fixedList }));
            })),
        react_1["default"].createElement(styleds_1.Separator, null),
        react_1["default"].createElement(Card_1["default"], null,
            react_1["default"].createElement(Row_1.RowBetween, null,
                selectedListInfo.current ? (react_1["default"].createElement(Row_1["default"], null,
                    selectedListInfo.current.logoURI ? (react_1["default"].createElement(ListLogo_1["default"], { style: { marginRight: 12 }, logoURI: selectedListInfo.current.logoURI, alt: selectedListInfo.current.name + " list logo" })) : null,
                    react_1["default"].createElement(theme_1.TYPE.main, { id: "currency-search-selected-list-name" }, selectedListInfo.current.name))) : null,
                react_1["default"].createElement(theme_1.LinkStyledButton, { style: { fontWeight: 500, color: theme.text2, fontSize: 16 }, onClick: onChangeList, id: "currency-search-change-list-button" }, selectedListInfo.current ? 'Change' : 'Select a list')))));
}
exports.CurrencySearch = CurrencySearch;
