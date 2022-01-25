"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../hooks");
var theme_1 = require("../../theme");
var components_1 = require("../../theme/components");
var utils_1 = require("../../utils");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
var RowNoFlex = styled_components_1["default"](Row_1.AutoRow)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-wrap: nowrap;\n"], ["\n  flex-wrap: nowrap;\n"])));
function TransactionPopup(_a) {
    var hash = _a.hash, success = _a.success, summary = _a.summary;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(RowNoFlex, null,
        react_1["default"].createElement("div", { style: { paddingRight: 16 } }, success ? react_1["default"].createElement(react_feather_1.CheckCircle, { color: theme.green1, size: 24 }) : react_1["default"].createElement(react_feather_1.AlertCircle, { color: theme.red1, size: 24 })),
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "8px" },
            react_1["default"].createElement(theme_1.TYPE.body, { fontWeight: 500 }, summary !== null && summary !== void 0 ? summary : 'Hash: ' + hash.slice(0, 8) + '...' + hash.slice(58, 65)),
            chainId && (react_1["default"].createElement(components_1.ExternalLink, { href: utils_1.getEtherscanLink(chainId, hash, 'transaction') }, "View on Bscscan")))));
}
exports["default"] = TransactionPopup;
var templateObject_1;
