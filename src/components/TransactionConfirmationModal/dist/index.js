"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TransactionErrorContent = exports.ConfirmationModalContent = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Modal_1 = require("../Modal");
var theme_1 = require("../../theme");
var rebass_1 = require("rebass");
var components_1 = require("../../theme/components");
var Row_1 = require("../Row");
var react_feather_1 = require("react-feather");
var Button_1 = require("../Button");
var Column_1 = require("../Column");
var blue_loader_svg_1 = require("../../assets/images/blue-loader.svg");
var utils_1 = require("../../utils");
var hooks_1 = require("../../hooks");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Section = styled_components_1["default"](Column_1.AutoColumn)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 24px;\n"], ["\n  padding: 24px;\n"])));
var BottomSection = styled_components_1["default"](Section)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"], ["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
var ConfirmedIcon = styled_components_1["default"](Column_1.ColumnCenter)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 60px 0;\n"], ["\n  padding: 60px 0;\n"])));
var CustomLightSpinner = styled_components_1["default"](components_1.Spinner)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n"], ["\n  height: ", ";\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
});
function ConfirmationPendingContent(_a) {
    var onDismiss = _a.onDismiss, pendingText = _a.pendingText;
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(Section, null,
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement("div", null),
                react_1["default"].createElement(components_1.CloseIcon, { onClick: onDismiss })),
            react_1["default"].createElement(ConfirmedIcon, null,
                react_1["default"].createElement(CustomLightSpinner, { src: blue_loader_svg_1["default"], alt: "loader", size: '90px' })),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px", justify: 'center' },
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Waiting For Confirmation"),
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px", justify: 'center' },
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 600, fontSize: 14, color: "", textAlign: "center" }, pendingText)),
                react_1["default"].createElement(rebass_1.Text, { fontSize: 12, color: "#565A69", textAlign: "center" }, "Confirm this transaction in your wallet")))));
}
function TransactionSubmittedContent(_a) {
    var onDismiss = _a.onDismiss, chainId = _a.chainId, hash = _a.hash;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(Section, null,
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement("div", null),
                react_1["default"].createElement(components_1.CloseIcon, { onClick: onDismiss })),
            react_1["default"].createElement(ConfirmedIcon, null,
                react_1["default"].createElement(react_feather_1.ArrowUpCircle, { strokeWidth: 0.5, size: 90, color: theme.primary1 })),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px", justify: 'center' },
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Transaction Submitted"),
                chainId && hash && (react_1["default"].createElement(theme_1.ExternalLink, { href: utils_1.getEtherscanLink(chainId, hash, 'transaction') },
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14, color: theme.primary1 }, "View on Bscscan"))),
                react_1["default"].createElement(Button_1.ButtonPrimary, { onClick: onDismiss, style: { margin: '20px 0 0 0' } },
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Close"))))));
}
function ConfirmationModalContent(_a) {
    var title = _a.title, bottomContent = _a.bottomContent, onDismiss = _a.onDismiss, topContent = _a.topContent;
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(Section, null,
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, title),
                react_1["default"].createElement(components_1.CloseIcon, { onClick: onDismiss })),
            topContent()),
        react_1["default"].createElement(BottomSection, { gap: "12px" }, bottomContent())));
}
exports.ConfirmationModalContent = ConfirmationModalContent;
function TransactionErrorContent(_a) {
    var message = _a.message, onDismiss = _a.onDismiss;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(Section, null,
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Error"),
                react_1["default"].createElement(components_1.CloseIcon, { onClick: onDismiss })),
            react_1["default"].createElement(Column_1.AutoColumn, { style: { marginTop: 20, padding: '2rem 0' }, gap: "24px", justify: "center" },
                react_1["default"].createElement(react_feather_1.AlertTriangle, { color: theme.red1, style: { strokeWidth: 1.5 }, size: 64 }),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16, color: theme.red1, style: { textAlign: 'center', width: '85%' } }, message))),
        react_1["default"].createElement(BottomSection, { gap: "12px" },
            react_1["default"].createElement(Button_1.ButtonPrimary, { onClick: onDismiss }, "Dismiss"))));
}
exports.TransactionErrorContent = TransactionErrorContent;
function TransactionConfirmationModal(_a) {
    var isOpen = _a.isOpen, onDismiss = _a.onDismiss, attemptingTxn = _a.attemptingTxn, hash = _a.hash, pendingText = _a.pendingText, content = _a.content;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    if (!chainId)
        return null;
    // confirmation screen
    return (react_1["default"].createElement(Modal_1["default"], { isOpen: isOpen, onDismiss: onDismiss, maxHeight: 90 }, attemptingTxn ? (react_1["default"].createElement(ConfirmationPendingContent, { onDismiss: onDismiss, pendingText: pendingText })) : hash ? (react_1["default"].createElement(TransactionSubmittedContent, { chainId: chainId, hash: hash, onDismiss: onDismiss })) : (content())));
}
exports["default"] = TransactionConfirmationModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
