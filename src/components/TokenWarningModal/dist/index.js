"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var polished_1 = require("polished");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var theme_1 = require("../../theme");
var utils_1 = require("../../utils");
var CurrencyLogo_1 = require("../CurrencyLogo");
var Modal_1 = require("../Modal");
var Row_1 = require("../Row");
var Column_1 = require("../Column");
var react_feather_1 = require("react-feather");
var Button_1 = require("../Button");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"], ["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"])), function (_a) {
    var theme = _a.theme;
    return polished_1.transparentize(0.6, theme.bg3);
});
var WarningContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"], ["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"])));
var StyledWarningIcon = styled_components_1["default"](react_feather_1.AlertTriangle)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  stroke: ", ";\n"], ["\n  stroke: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.red2;
});
function TokenWarningCard(_a) {
    var _b, _c, _d, _e;
    var token = _a.token;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    var tokenSymbol = (_c = (_b = token === null || token === void 0 ? void 0 : token.symbol) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : '';
    var tokenName = (_e = (_d = token === null || token === void 0 ? void 0 : token.name) === null || _d === void 0 ? void 0 : _d.toLowerCase()) !== null && _e !== void 0 ? _e : '';
    var allTokens = Tokens_1.useAllTokens();
    var duplicateNameOrSymbol = react_1.useMemo(function () {
        if (!token || !chainId)
            return false;
        return Object.keys(allTokens).some(function (tokenAddress) {
            var _a, _b;
            var userToken = allTokens[tokenAddress];
            if (userToken.equals(token)) {
                return false;
            }
            return ((_a = userToken.symbol) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === tokenSymbol || ((_b = userToken.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === tokenName;
        });
    }, [token, chainId, allTokens, tokenSymbol, tokenName]);
    if (!token)
        return null;
    return (react_1["default"].createElement(Wrapper, { error: duplicateNameOrSymbol },
        react_1["default"].createElement(Row_1.AutoRow, { gap: "6px" },
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "24px" },
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: token, size: '16px' }),
                react_1["default"].createElement("div", null, " ")),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "10px", justify: "flex-start" },
                react_1["default"].createElement(theme_1.TYPE.main, null,
                    token && token.name && token.symbol && token.name !== token.symbol
                        ? token.name + " (" + token.symbol + ")"
                        : token.name || token.symbol,
                    ' '),
                chainId && (react_1["default"].createElement(theme_1.ExternalLink, { style: { fontWeight: 400 }, href: utils_1.getEtherscanLink(chainId, token.address, 'token') },
                    react_1["default"].createElement(theme_1.TYPE.blue, { title: token.address },
                        utils_1.shortenAddress(token.address),
                        " (View on Bscscan)")))))));
}
function TokenWarningModal(_a) {
    var isOpen = _a.isOpen, tokens = _a.tokens, onConfirm = _a.onConfirm;
    var _b = react_1.useState(false), understandChecked = _b[0], setUnderstandChecked = _b[1];
    var toggleUnderstand = react_1.useCallback(function () { return setUnderstandChecked(function (uc) { return !uc; }); }, []);
    var handleDismiss = react_1.useCallback(function () { return null; }, []);
    return (react_1["default"].createElement(Modal_1["default"], { isOpen: isOpen, onDismiss: handleDismiss, maxHeight: 90 },
        react_1["default"].createElement(WarningContainer, { className: "token-warning-container" },
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "lg" },
                react_1["default"].createElement(Row_1.AutoRow, { gap: "6px" },
                    react_1["default"].createElement(StyledWarningIcon, null),
                    react_1["default"].createElement(theme_1.TYPE.main, { color: 'red2' }, "Token imported")),
                react_1["default"].createElement(theme_1.TYPE.body, { color: 'red2' },
                    "Anyone can create an ERC20 token on Ethereum with ",
                    react_1["default"].createElement("em", null, "any"),
                    " name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."),
                react_1["default"].createElement(theme_1.TYPE.body, { color: 'red2' }, "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary ERC20 tokens."),
                react_1["default"].createElement(theme_1.TYPE.body, { color: 'red2' },
                    "If you purchase an arbitrary token, ",
                    react_1["default"].createElement("strong", null, "you may be unable to sell it back.")),
                tokens.map(function (token) {
                    return react_1["default"].createElement(TokenWarningCard, { key: token.address, token: token });
                }),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { style: { cursor: 'pointer', userSelect: 'none' } },
                            react_1["default"].createElement("input", { type: "checkbox", className: "understand-checkbox", checked: understandChecked, onChange: toggleUnderstand }),
                            ' ',
                            "I understand")),
                    react_1["default"].createElement(Button_1.ButtonError, { disabled: !understandChecked, error: true, width: '140px', padding: "0.5rem 1rem", className: "token-dismiss-button", style: {
                            borderRadius: '10px'
                        }, onClick: function () {
                            onConfirm();
                        } },
                        react_1["default"].createElement(theme_1.TYPE.body, { color: "white" }, "Continue")))))));
}
exports["default"] = TokenWarningModal;
var templateObject_1, templateObject_2, templateObject_3;
