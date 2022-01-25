"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a;
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_device_detect_1 = require("react-device-detect");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var logo_with_text_svg_1 = require("../../assets/images/logo-with-text.svg");
var logo_with_text_svg_2 = require("../../assets/images/logo-with-text.svg");
var hooks_1 = require("../../hooks");
var hooks_2 = require("../../state/user/hooks");
var hooks_3 = require("../../state/wallet/hooks");
var Card_1 = require("../Card");
var Settings_1 = require("../Settings");
// import Menu from '../Menu'
var Row_1 = require("../Row");
var Web3Status_1 = require("../Web3Status");
// import VersionSwitch from './VersionSwitch'
var HeaderFrame = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToExtraSmall(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 12px 0 0 0;\n    width: calc(100%);\n    position: relative;\n  "], ["\n    padding: 12px 0 0 0;\n    width: calc(100%);\n    position: relative;\n  "])));
});
var HeaderElement = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var HeaderElementWrap = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  ", ";\n"], ["\n  display: flex;\n  align-items: center;\n\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToSmall(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-top: 0.5rem;\n"], ["\n    margin-top: 0.5rem;\n"])));
});
var Title = styled_components_1["default"].a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  pointer-events: auto;\n  text-decoration: none;\n  text-decoration-style: unset;\n\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  pointer-events: auto;\n  text-decoration: none;\n  text-decoration-style: unset;\n\n  :hover {\n    cursor: pointer;\n  }\n"])));
var AccountElement = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  white-space: nowrap;\n  width: 100%;\n\n  :focus {\n    border: 1px solid blue;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  white-space: nowrap;\n  width: 100%;\n\n  :focus {\n    border: 1px solid blue;\n  }\n"])), function (_a) {
    var theme = _a.theme, active = _a.active;
    return (!active ? theme.bg1 : theme.bg3);
});
var TestnetWrapper = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  white-space: nowrap;\n  width: fit-content;\n  margin-left: 10px;\n  pointer-events: auto;\n"], ["\n  white-space: nowrap;\n  width: fit-content;\n  margin-left: 10px;\n  pointer-events: auto;\n"])));
var NetworkCard = styled_components_1["default"](Card_1.YellowCard)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: fit-content;\n  margin-right: 10px;\n  border-radius: 12px;\n  padding: 8px 12px;\n"], ["\n  width: fit-content;\n  margin-right: 10px;\n  border-radius: 12px;\n  padding: 8px 12px;\n"])));
var UniIcon = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  transition: transform 0.3s ease;\n  :hover {\n    transform: rotate(-5deg);\n  }\n  ", ";\n"], ["\n  transition: transform 0.3s ease;\n  :hover {\n    transform: rotate(-5deg);\n  }\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToSmall(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    img {\n      width: 4.5rem;\n    }\n  "], ["\n    img {\n      width: 4.5rem;\n    }\n  "])));
});
var HeaderControls = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToSmall(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    flex-direction: column;\n    align-items: flex-end;\n  "], ["\n    flex-direction: column;\n    align-items: flex-end;\n  "])));
});
var BalanceText = styled_components_1["default"](rebass_1.Text)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToExtraSmall(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    display: none;\n  "], ["\n    display: none;\n  "])));
});
var NETWORK_LABELS = (_a = {},
    _a[sdk_1.ChainId.MAINNET] = null,
    _a[sdk_1.ChainId.RINKEBY] = 'Rinkeby',
    _a[sdk_1.ChainId.ROPSTEN] = 'Ropsten',
    _a[sdk_1.ChainId.GÖRLI] = 'Görli',
    _a[sdk_1.ChainId.KOVAN] = 'Kovan',
    _a[sdk_1.ChainId.BSC] = 'BSC',
    _a[sdk_1.ChainId.HUOBI] = 'HUOBI',
    _a[sdk_1.ChainId.BSCT] = 'BSC Testnet',
    _a);
function Header() {
    var _a;
    var _b = hooks_1.useActiveWeb3React(), account = _b.account, chainId = _b.chainId;
    var userEthBalance = (_a = hooks_3.useETHBalances(account ? [account] : [])) === null || _a === void 0 ? void 0 : _a[account !== null && account !== void 0 ? account : ''];
    var isDark = hooks_2.useDarkModeManager()[0];
    return (react_1["default"].createElement(HeaderFrame, null,
        react_1["default"].createElement(Row_1.RowBetween, { style: { alignItems: 'flex-start' }, padding: "1rem 1rem 0 1rem" },
            react_1["default"].createElement(HeaderElement, null,
                react_1["default"].createElement(Title, { href: "." },
                    react_1["default"].createElement(UniIcon, null,
                        react_1["default"].createElement("img", { style: { height: 32 }, src: isDark ? logo_with_text_svg_2["default"] : logo_with_text_svg_1["default"], alt: "logo" })))),
            react_1["default"].createElement(HeaderControls, null,
                react_1["default"].createElement(HeaderElement, null,
                    react_1["default"].createElement(TestnetWrapper, null, !react_device_detect_1.isMobile && chainId && NETWORK_LABELS[chainId] && react_1["default"].createElement(NetworkCard, null, NETWORK_LABELS[chainId])),
                    react_1["default"].createElement(AccountElement, { active: !!account, style: { pointerEvents: 'auto' } },
                        account && userEthBalance ? (react_1["default"].createElement(BalanceText, { style: { flexShrink: 0 }, pl: "0.75rem", pr: "0.5rem", fontWeight: 500 }, userEthBalance === null || userEthBalance === void 0 ? void 0 :
                            userEthBalance.toSignificant(4),
                            " BNB")) : null,
                        react_1["default"].createElement(Web3Status_1["default"], null))),
                react_1["default"].createElement(HeaderElementWrap, null,
                    react_1["default"].createElement(Settings_1["default"], null))))));
}
exports["default"] = Header;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
