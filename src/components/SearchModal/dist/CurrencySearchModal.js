"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var useLast_1 = require("../../hooks/useLast");
var hooks_1 = require("../../state/lists/hooks");
var Modal_1 = require("../Modal");
var CurrencySearch_1 = require("./CurrencySearch");
var ListIntroduction_1 = require("./ListIntroduction");
var ListSelect_1 = require("./ListSelect");
function CurrencySearchModal(_a) {
    var isOpen = _a.isOpen, onDismiss = _a.onDismiss, onCurrencySelect = _a.onCurrencySelect, selectedCurrency = _a.selectedCurrency, otherSelectedCurrency = _a.otherSelectedCurrency, _b = _a.showCommonBases, showCommonBases = _b === void 0 ? false : _b;
    var _c = react_1.useState(false), listView = _c[0], setListView = _c[1];
    var lastOpen = useLast_1["default"](isOpen);
    react_1.useEffect(function () {
        if (isOpen && !lastOpen) {
            setListView(false);
        }
    }, [isOpen, lastOpen]);
    var handleCurrencySelect = react_1.useCallback(function (currency) {
        onCurrencySelect(currency);
        onDismiss();
    }, [onDismiss, onCurrencySelect]);
    var handleClickChangeList = react_1.useCallback(function () {
        react_ga_1["default"].event({
            category: 'Lists',
            action: 'Change Lists'
        });
        setListView(true);
    }, []);
    var handleClickBack = react_1.useCallback(function () {
        react_ga_1["default"].event({
            category: 'Lists',
            action: 'Back'
        });
        setListView(false);
    }, []);
    var handleSelectListIntroduction = react_1.useCallback(function () {
        setListView(true);
    }, []);
    var selectedListUrl = hooks_1.useSelectedListUrl();
    var noListSelected = !selectedListUrl;
    return (react_1["default"].createElement(Modal_1["default"], { isOpen: isOpen, onDismiss: onDismiss, maxHeight: 90, minHeight: listView ? 40 : noListSelected ? 0 : 80 }, listView ? (react_1["default"].createElement(ListSelect_1.ListSelect, { onDismiss: onDismiss, onBack: handleClickBack })) : noListSelected ? (react_1["default"].createElement(ListIntroduction_1["default"], { onSelectList: handleSelectListIntroduction })) : (react_1["default"].createElement(CurrencySearch_1.CurrencySearch, { isOpen: isOpen, onDismiss: onDismiss, onCurrencySelect: handleCurrencySelect, onChangeList: handleClickChangeList, selectedCurrency: selectedCurrency, otherSelectedCurrency: otherSelectedCurrency, showCommonBases: showCommonBases }))));
}
exports["default"] = CurrencySearchModal;
