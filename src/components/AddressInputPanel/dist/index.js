"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var useENS_1 = require("../../hooks/useENS");
var hooks_1 = require("../../hooks");
var theme_1 = require("../../theme");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
var utils_1 = require("../../utils");
var InputPanel = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"], ["\n  ", "\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
});
var ContainerRow = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"])), function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.red1 : theme.bg2);
}, function (_a) {
    var error = _a.error;
    return (error ? 'step-end' : 'step-start');
}, function (_a) {
    var error = _a.error;
    return (error ? 'step-end' : 'step-start');
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
});
var InputContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  padding: 1rem;\n"], ["\n  flex: 1;\n  padding: 1rem;\n"])));
var Input = styled_components_1["default"].input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var error = _a.error;
    return (error ? 'step-end' : 'step-start');
}, function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.red1 : theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return theme.text4;
});
function AddressInputPanel(_a) {
    var id = _a.id, value = _a.value, onChange = _a.onChange;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var _b = useENS_1["default"](value), address = _b.address, loading = _b.loading, name = _b.name;
    var handleInput = react_1.useCallback(function (event) {
        var input = event.target.value;
        var withoutSpaces = input.replace(/\s+/g, '');
        onChange(withoutSpaces);
    }, [onChange]);
    var error = Boolean(value.length > 0 && !loading && !address);
    return (react_1["default"].createElement(InputPanel, { id: id },
        react_1["default"].createElement(ContainerRow, { error: error },
            react_1["default"].createElement(InputContainer, null,
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
                    react_1["default"].createElement(Row_1.RowBetween, null,
                        react_1["default"].createElement(theme_1.TYPE.black, { color: theme.text2, fontWeight: 500, fontSize: 14 }, "Recipient"),
                        address && chainId && (react_1["default"].createElement(theme_1.ExternalLink, { href: utils_1.getEtherscanLink(chainId, name !== null && name !== void 0 ? name : address, 'address'), style: { fontSize: '14px' } }, "(View on Bscscan)"))),
                    react_1["default"].createElement(Input, { className: "recipient-address-input", type: "text", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: "false", placeholder: "Wallet Address or ENS name", error: error, pattern: "^(0x[a-fA-F0-9]{40})$", onChange: handleInput, value: value }))))));
}
exports["default"] = AddressInputPanel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
