"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
var hooks_1 = require("../../state/wallet/hooks");
var CurrencySearchModal_1 = require("../SearchModal/CurrencySearchModal");
var CurrencyLogo_1 = require("../CurrencyLogo");
var DoubleLogo_1 = require("../DoubleLogo");
var Row_1 = require("../Row");
var theme_1 = require("../../theme");
var NumericalInput_1 = require("../NumericalInput");
var dropdown_svg_1 = require("../../assets/images/dropdown.svg");
var hooks_2 = require("../../hooks");
var react_i18next_1 = require("react-i18next");
var InputRow = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  align-items: center;\n  padding: ", ";\n"], ["\n  ", "\n  align-items: center;\n  padding: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (_a) {
    var selected = _a.selected;
    return (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem');
});
var CurrencySelect = styled_components_1["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  height: 2.2rem;\n  font-size: 20px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"], ["\n  align-items: center;\n  height: 2.2rem;\n  font-size: 20px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var selected = _a.selected, theme = _a.theme;
    return (selected ? theme.bg1 : theme.primary1);
}, function (_a) {
    var selected = _a.selected, theme = _a.theme;
    return (selected ? theme.text1 : theme.white);
}, function (_a) {
    var selected = _a.selected;
    return (selected ? 'none' : '0px 6px 10px rgba(0, 0, 0, 0.075)');
}, function (_a) {
    var selected = _a.selected, theme = _a.theme;
    return (selected ? theme.bg2 : polished_1.darken(0.05, theme.primary1));
});
var LabelRow = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"], ["\n  ", "\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.2, theme.text2);
});
var Aligner = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var StyledDropDown = styled_components_1["default"](dropdown_svg_1.ReactComponent)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0 0.25rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ", ";\n    stroke-width: 1.5px;\n  }\n"], ["\n  margin: 0 0.25rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ", ";\n    stroke-width: 1.5px;\n  }\n"])), function (_a) {
    var selected = _a.selected, theme = _a.theme;
    return (selected ? theme.text1 : theme.white);
});
var InputPanel = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"], ["\n  ", "\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
}, function (_a) {
    var hideInput = _a.hideInput;
    return (hideInput ? '8px' : '20px');
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
var Container = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"], ["\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), function (_a) {
    var hideInput = _a.hideInput;
    return (hideInput ? '8px' : '20px');
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
});
var StyledTokenName = styled_components_1["default"].span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n  font-size:  ", ";\n\n"], ["\n  ", "\n  font-size:  ", ";\n\n"])), function (_a) {
    var active = _a.active;
    return (active ? '  margin: 0 0.25rem 0 0.75rem;' : '  margin: 0 0.25rem 0 0.25rem;');
}, function (_a) {
    var active = _a.active;
    return (active ? '20px' : '16px');
});
var StyledBalanceMax = styled_components_1["default"].button(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  height: 28px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  color: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  ", ";\n"], ["\n  height: 28px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  color: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary5;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary5;
}, function (_a) {
    var theme = _a.theme;
    return theme.primaryText1;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToExtraSmall(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    margin-right: 0.5rem;\n  "], ["\n    margin-right: 0.5rem;\n  "])));
});
function CurrencyInputPanel(_a) {
    var value = _a.value, onUserInput = _a.onUserInput, onMax = _a.onMax, showMaxButton = _a.showMaxButton, _b = _a.label, label = _b === void 0 ? 'Input' : _b, onCurrencySelect = _a.onCurrencySelect, currency = _a.currency, _c = _a.disableCurrencySelect, disableCurrencySelect = _c === void 0 ? false : _c, _d = _a.hideBalance, hideBalance = _d === void 0 ? false : _d, _e = _a.pair, pair = _e === void 0 ? null : _e, // used for double token logo
    _f = _a.hideInput, // used for double token logo
    hideInput = _f === void 0 ? false : _f, otherCurrency = _a.otherCurrency, id = _a.id, showCommonBases = _a.showCommonBases;
    var t = react_i18next_1.useTranslation().t;
    var _g = react_1.useState(false), modalOpen = _g[0], setModalOpen = _g[1];
    var account = hooks_2.useActiveWeb3React().account;
    var selectedCurrencyBalance = hooks_1.useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currency !== null && currency !== void 0 ? currency : undefined);
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var handleDismissSearch = react_1.useCallback(function () {
        setModalOpen(false);
    }, [setModalOpen]);
    return (react_1["default"].createElement(InputPanel, { id: id },
        react_1["default"].createElement(Container, { hideInput: hideInput },
            !hideInput && (react_1["default"].createElement(LabelRow, null,
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(theme_1.TYPE.body, { color: theme.text2, fontWeight: 500, fontSize: 14 }, label),
                    account && (react_1["default"].createElement(theme_1.TYPE.body, { onClick: onMax, color: theme.text2, fontWeight: 500, fontSize: 14, style: { display: 'inline', cursor: 'pointer' } }, !hideBalance && !!currency && selectedCurrencyBalance
                        ? 'Balance: ' + (selectedCurrencyBalance === null || selectedCurrencyBalance === void 0 ? void 0 : selectedCurrencyBalance.toSignificant(6))
                        : ' -'))))),
            react_1["default"].createElement(InputRow, { style: hideInput ? { padding: '0', borderRadius: '8px' } : {}, selected: disableCurrencySelect },
                !hideInput && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(NumericalInput_1.Input, { className: "token-amount-input", value: value, onUserInput: function (val) {
                            onUserInput(val);
                        } }),
                    account && currency && showMaxButton && label !== 'To' && (react_1["default"].createElement(StyledBalanceMax, { onClick: onMax }, "MAX")))),
                react_1["default"].createElement(CurrencySelect, { selected: !!currency, className: "open-currency-select-button", onClick: function () {
                        if (!disableCurrencySelect) {
                            setModalOpen(true);
                        }
                    } },
                    react_1["default"].createElement(Aligner, null,
                        pair ? (react_1["default"].createElement(DoubleLogo_1["default"], { currency0: pair.token0, currency1: pair.token1, size: 24, margin: true })) : currency ? (react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currency, size: '24px' })) : null,
                        pair ? (react_1["default"].createElement(StyledTokenName, { className: "pair-name-container" }, pair === null || pair === void 0 ? void 0 :
                            pair.token0.symbol,
                            ":", pair === null || pair === void 0 ? void 0 :
                            pair.token1.symbol)) : (react_1["default"].createElement(StyledTokenName, { className: "token-symbol-container", active: Boolean(currency && currency.symbol) }, (currency && currency.symbol && currency.symbol.length > 20
                            ? currency.symbol.slice(0, 4) +
                                '...' +
                                currency.symbol.slice(currency.symbol.length - 5, currency.symbol.length)
                            : currency === null || currency === void 0 ? void 0 : currency.symbol) || t('selectToken'))),
                        !disableCurrencySelect && react_1["default"].createElement(StyledDropDown, { selected: !!currency }))))),
        !disableCurrencySelect && onCurrencySelect && (react_1["default"].createElement(CurrencySearchModal_1["default"], { isOpen: modalOpen, onDismiss: handleDismissSearch, onCurrencySelect: onCurrencySelect, selectedCurrency: currency, otherSelectedCurrency: otherCurrency, showCommonBases: showCommonBases }))));
}
exports["default"] = CurrencyInputPanel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
