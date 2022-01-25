"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../hooks");
var actions_1 = require("../../state/transactions/actions");
var utils_1 = require("../../utils");
var Row_1 = require("../Row");
var Copy_1 = require("./Copy");
var Transaction_1 = require("./Transaction");
var constants_1 = require("../../constants");
var x_svg_1 = require("../../assets/images/x.svg");
var utils_2 = require("../../utils");
var connectors_1 = require("../../connectors");
var coinbaseWalletIcon_svg_1 = require("../../assets/images/coinbaseWalletIcon.svg");
var walletConnectIcon_svg_1 = require("../../assets/images/walletConnectIcon.svg");
var fortmaticIcon_png_1 = require("../../assets/images/fortmaticIcon.png");
var portisIcon_png_1 = require("../../assets/images/portisIcon.png");
var Identicon_1 = require("../Identicon");
var Button_1 = require("../Button");
var react_feather_1 = require("react-feather");
var theme_1 = require("../../theme");
var HeaderRow = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"], ["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (props) { return (props.color === 'blue' ? function (_a) {
    var theme = _a.theme;
    return theme.primary1;
} : 'inherit'); }, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToMedium(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 1rem;\n  "], ["\n    padding: 1rem;\n  "])));
});
var UpperSection = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"], ["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"])));
var InfoCard = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 1rem;\n  border: 1px solid ", ";\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n"], ["\n  padding: 1rem;\n  border: 1px solid ", ";\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
var AccountGroupingRow = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ", ";\n\n  div {\n    ", "\n    align-items: center;\n  }\n"], ["\n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ", ";\n\n  div {\n    ", "\n    align-items: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
});
var AccountSection = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 0rem 1rem;\n  ", ";\n"], ["\n  background-color: ", ";\n  padding: 0rem 1rem;\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToMedium(templateObject_6 || (templateObject_6 = __makeTemplateObject(["padding: 0rem 1rem 1.5rem 1rem;"], ["padding: 0rem 1rem 1.5rem 1rem;"])));
});
var YourAccount = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n"], ["\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n"])));
var LowerSection = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n  padding: 1.5rem;\n  flex-grow: 1;\n  overflow: auto;\n  background-color: ", ";\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 20px;\n\n  h5 {\n    margin: 0;\n    font-weight: 400;\n    color: ", ";\n  }\n"], ["\n  ", "\n  padding: 1.5rem;\n  flex-grow: 1;\n  overflow: auto;\n  background-color: ", ";\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 20px;\n\n  h5 {\n    margin: 0;\n    font-weight: 400;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.text3;
});
var AccountControl = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n\n  font-weight: 500;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n\n  font-weight: 500;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
var AddressLink = styled_components_1["default"](theme_1.ExternalLink)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 0.825rem;\n  color: ", ";\n  margin-left: 1rem;\n  font-size: 0.825rem;\n  display: flex;\n  :hover {\n    color: ", ";\n  }\n"], ["\n  font-size: 0.825rem;\n  color: ", ";\n  margin-left: 1rem;\n  font-size: 0.825rem;\n  display: flex;\n  :hover {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
});
var CloseIcon = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"], ["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"])));
var CloseColor = styled_components_1["default"](x_svg_1.ReactComponent)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  path {\n    stroke: ", ";\n  }\n"], ["\n  path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text4;
});
var WalletName = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: initial;\n  font-size: 0.825rem;\n  font-weight: 500;\n  color: ", ";\n"], ["\n  width: initial;\n  font-size: 0.825rem;\n  font-weight: 500;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text3;
});
var IconWrapper = styled_components_1["default"].div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
}, function (_a) {
    var size = _a.size;
    return (size ? size + 'px' : '32px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + 'px' : '32px');
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToMedium(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    align-items: flex-end;\n  "], ["\n    align-items: flex-end;\n  "])));
});
var TransactionListWrapper = styled_components_1["default"].div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
});
var WalletAction = styled_components_1["default"](Button_1.ButtonSecondary)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  width: fit-content;\n  font-weight: 400;\n  margin-left: 8px;\n  font-size: 0.825rem;\n  padding: 4px 6px;\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"], ["\n  width: fit-content;\n  font-weight: 400;\n  margin-left: 8px;\n  font-size: 0.825rem;\n  padding: 4px 6px;\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"])));
var MainWalletAction = styled_components_1["default"](WalletAction)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
function renderTransactions(transactions) {
    return (react_1["default"].createElement(TransactionListWrapper, null, transactions.map(function (hash, i) {
        return react_1["default"].createElement(Transaction_1["default"], { key: i, hash: hash });
    })));
}
function AccountDetails(_a) {
    var toggleWalletModal = _a.toggleWalletModal, pendingTransactions = _a.pendingTransactions, confirmedTransactions = _a.confirmedTransactions, ENSName = _a.ENSName, openOptions = _a.openOptions;
    var _b = hooks_1.useActiveWeb3React(), chainId = _b.chainId, account = _b.account, connector = _b.connector;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var dispatch = react_redux_1.useDispatch();
    function formatConnectorName() {
        var ethereum = window.ethereum;
        var isMetaMask = !!(ethereum && ethereum.isMetaMask);
        var name = Object.keys(constants_1.SUPPORTED_WALLETS)
            .filter(function (k) {
            return constants_1.SUPPORTED_WALLETS[k].connector === connector && (connector !== connectors_1.injected || isMetaMask === (k === 'METAMASK'));
        })
            .map(function (k) { return constants_1.SUPPORTED_WALLETS[k].name; })[0];
        return react_1["default"].createElement(WalletName, null,
            "Connected with ",
            name);
    }
    function getStatusIcon() {
        if (connector === connectors_1.injected) {
            return (react_1["default"].createElement(IconWrapper, { size: 16 },
                react_1["default"].createElement(Identicon_1["default"], null)));
        }
        else if (connector === connectors_1.walletconnect) {
            return (react_1["default"].createElement(IconWrapper, { size: 16 },
                react_1["default"].createElement("img", { src: walletConnectIcon_svg_1["default"], alt: 'wallet connect logo' })));
        }
        else if (connector === connectors_1.walletlink) {
            return (react_1["default"].createElement(IconWrapper, { size: 16 },
                react_1["default"].createElement("img", { src: coinbaseWalletIcon_svg_1["default"], alt: 'coinbase wallet logo' })));
        }
        else if (connector === connectors_1.fortmatic) {
            return (react_1["default"].createElement(IconWrapper, { size: 16 },
                react_1["default"].createElement("img", { src: fortmaticIcon_png_1["default"], alt: 'fortmatic logo' })));
        }
        else if (connector === connectors_1.portis) {
            return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(IconWrapper, { size: 16 },
                    react_1["default"].createElement("img", { src: portisIcon_png_1["default"], alt: 'portis logo' }),
                    react_1["default"].createElement(MainWalletAction, { onClick: function () {
                            connectors_1.portis.portis.showPortis();
                        } }, "Show Portis"))));
        }
        return null;
    }
    var clearAllTransactionsCallback = react_1.useCallback(function () {
        if (chainId)
            dispatch(actions_1.clearAllTransactions({ chainId: chainId }));
    }, [dispatch, chainId]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(UpperSection, null,
            react_1["default"].createElement(CloseIcon, { onClick: toggleWalletModal },
                react_1["default"].createElement(CloseColor, null)),
            react_1["default"].createElement(HeaderRow, null, "Account"),
            react_1["default"].createElement(AccountSection, null,
                react_1["default"].createElement(YourAccount, null,
                    react_1["default"].createElement(InfoCard, null,
                        react_1["default"].createElement(AccountGroupingRow, null,
                            formatConnectorName(),
                            react_1["default"].createElement("div", null,
                                connector !== connectors_1.injected && connector !== connectors_1.walletlink && (react_1["default"].createElement(WalletAction, { style: { fontSize: '.825rem', fontWeight: 400, marginRight: '8px' }, onClick: function () {
                                        ;
                                        connector.close();
                                    } }, "Disconnect")),
                                react_1["default"].createElement(WalletAction, { style: { fontSize: '.825rem', fontWeight: 400 }, onClick: function () {
                                        openOptions();
                                    } }, "Change"))),
                        react_1["default"].createElement(AccountGroupingRow, { id: "web3-account-identifier-row" },
                            react_1["default"].createElement(AccountControl, null, ENSName ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("div", null,
                                    getStatusIcon(),
                                    react_1["default"].createElement("p", null,
                                        " ",
                                        ENSName)))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("div", null,
                                    getStatusIcon(),
                                    react_1["default"].createElement("p", null,
                                        " ",
                                        account && utils_1.shortenAddress(account))))))),
                        react_1["default"].createElement(AccountGroupingRow, null, ENSName ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(AccountControl, null,
                                react_1["default"].createElement("div", null,
                                    account && (react_1["default"].createElement(Copy_1["default"], { toCopy: account },
                                        react_1["default"].createElement("span", { style: { marginLeft: '4px' } }, "Copy Address"))),
                                    chainId && account && (react_1["default"].createElement(AddressLink, { hasENS: !!ENSName, isENS: true, href: chainId && utils_2.getEtherscanLink(chainId, ENSName, 'address') },
                                        react_1["default"].createElement(react_feather_1.ExternalLink, { size: 16 }),
                                        react_1["default"].createElement("span", { style: { marginLeft: '4px' } }, "View on Bscscan"))))))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(AccountControl, null,
                                react_1["default"].createElement("div", null,
                                    account && (react_1["default"].createElement(Copy_1["default"], { toCopy: account },
                                        react_1["default"].createElement("span", { style: { marginLeft: '4px' } }, "Copy Address"))),
                                    chainId && account && (react_1["default"].createElement(AddressLink, { hasENS: !!ENSName, isENS: false, href: utils_2.getEtherscanLink(chainId, account, 'address') },
                                        react_1["default"].createElement(react_feather_1.ExternalLink, { size: 16 }),
                                        react_1["default"].createElement("span", { style: { marginLeft: '4px' } }, "View on Bscscan")))))))))))),
        !!pendingTransactions.length || !!confirmedTransactions.length ? (react_1["default"].createElement(LowerSection, null,
            react_1["default"].createElement(Row_1.AutoRow, { mb: '1rem', style: { justifyContent: 'space-between' } },
                react_1["default"].createElement(theme_1.TYPE.body, null, "Recent Transactions"),
                react_1["default"].createElement(theme_1.LinkStyledButton, { onClick: clearAllTransactionsCallback }, "(clear all)")),
            renderTransactions(pendingTransactions),
            renderTransactions(confirmedTransactions))) : (react_1["default"].createElement(LowerSection, null,
            react_1["default"].createElement(theme_1.TYPE.body, { color: theme.text1 }, "Your transactions will appear here...")))));
}
exports["default"] = AccountDetails;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
