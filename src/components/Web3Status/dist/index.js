"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var core_1 = require("@web3-react/core");
var polished_1 = require("polished");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var react_i18next_1 = require("react-i18next");
var styled_components_1 = require("styled-components");
var coinbaseWalletIcon_svg_1 = require("../../assets/images/coinbaseWalletIcon.svg");
var fortmaticIcon_png_1 = require("../../assets/images/fortmaticIcon.png");
var portisIcon_png_1 = require("../../assets/images/portisIcon.png");
var walletConnectIcon_svg_1 = require("../../assets/images/walletConnectIcon.svg");
var connectors_1 = require("../../connectors");
var constants_1 = require("../../constants");
var useENSName_1 = require("../../hooks/useENSName");
var useSocksBalance_1 = require("../../hooks/useSocksBalance");
var hooks_1 = require("../../state/application/hooks");
var hooks_2 = require("../../state/transactions/hooks");
var utils_1 = require("../../utils");
var Button_1 = require("../Button");
var Identicon_1 = require("../Identicon");
var Loader_1 = require("../Loader");
var Row_1 = require("../Row");
var WalletModal_1 = require("../WalletModal");
var IconWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ", ";\n    width: ", ";\n  }\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ", ";\n    width: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
}, function (_a) {
    var size = _a.size;
    return (size ? size + 'px' : '32px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + 'px' : '32px');
});
var Web3StatusGeneric = styled_components_1["default"](Button_1.ButtonSecondary)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  width: 100%;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 12px;\n  cursor: pointer;\n  user-select: none;\n  :focus {\n    outline: none;\n  }\n"], ["\n  ", "\n  width: 100%;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 12px;\n  cursor: pointer;\n  user-select: none;\n  :focus {\n    outline: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
});
var Web3StatusError = styled_components_1["default"](Web3StatusGeneric)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.red1;
}, function (_a) {
    var theme = _a.theme;
    return theme.red1;
}, function (_a) {
    var theme = _a.theme;
    return theme.white;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.red1);
});
var Web3StatusConnect = styled_components_1["default"](Web3StatusGeneric)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  font-weight: 500;\n\n  :hover,\n  :focus {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  font-weight: 500;\n\n  :hover,\n  :focus {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary4;
}, function (_a) {
    var theme = _a.theme;
    return theme.primaryText1;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.primary4);
}, function (_a) {
    var theme = _a.theme;
    return theme.primaryText1;
}, function (_a) {
    var faded = _a.faded;
    return faded && styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n\n      :hover,\n      :focus {\n        border: 1px solid ", ";\n        color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n\n      :hover,\n      :focus {\n        border: 1px solid ", ";\n        color: ", ";\n      }\n    "])), function (_a) {
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
        return polished_1.darken(0.05, theme.primary4);
    }, function (_a) {
        var theme = _a.theme;
        return polished_1.darken(0.05, theme.primaryText1);
    });
});
var Web3StatusConnected = styled_components_1["default"](Web3StatusGeneric)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n\n    :focus {\n      border: 1px solid ", ";\n    }\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n\n    :focus {\n      border: 1px solid ", ";\n    }\n  }\n"])), function (_a) {
    var pending = _a.pending, theme = _a.theme;
    return (pending ? theme.primary1 : theme.bg2);
}, function (_a) {
    var pending = _a.pending, theme = _a.theme;
    return (pending ? theme.primary1 : theme.bg3);
}, function (_a) {
    var pending = _a.pending, theme = _a.theme;
    return (pending ? theme.white : theme.text1);
}, function (_a) {
    var pending = _a.pending, theme = _a.theme;
    return (pending ? polished_1.darken(0.05, theme.primary1) : polished_1.lighten(0.05, theme.bg2));
}, function (_a) {
    var pending = _a.pending, theme = _a.theme;
    return (pending ? polished_1.darken(0.1, theme.primary1) : polished_1.darken(0.1, theme.bg3));
});
var Text = styled_components_1["default"].p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 1rem;\n  width: fit-content;\n  font-weight: 500;\n"], ["\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 1rem;\n  width: fit-content;\n  font-weight: 500;\n"])));
var NetworkIcon = styled_components_1["default"](react_feather_1.Activity)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n  width: 16px;\n  height: 16px;\n"], ["\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n  width: 16px;\n  height: 16px;\n"
    // we want the latest one to come first, so return negative if a is after b
])));
// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a, b) {
    return b.addedTime - a.addedTime;
}
var SOCK = (react_1["default"].createElement("span", { role: "img", "aria-label": "has socks emoji", style: { marginTop: -4, marginBottom: -4 } }, "\uD83E\uDDE6"));
// eslint-disable-next-line react/prop-types
function StatusIcon(_a) {
    var connector = _a.connector;
    if (connector === connectors_1.injected) {
        return react_1["default"].createElement(Identicon_1["default"], null);
    }
    else if (connector === connectors_1.walletconnect) {
        return (react_1["default"].createElement(IconWrapper, { size: 16 },
            react_1["default"].createElement("img", { src: walletConnectIcon_svg_1["default"], alt: '' })));
    }
    else if (connector === connectors_1.walletlink) {
        return (react_1["default"].createElement(IconWrapper, { size: 16 },
            react_1["default"].createElement("img", { src: coinbaseWalletIcon_svg_1["default"], alt: '' })));
    }
    else if (connector === connectors_1.fortmatic) {
        return (react_1["default"].createElement(IconWrapper, { size: 16 },
            react_1["default"].createElement("img", { src: fortmaticIcon_png_1["default"], alt: '' })));
    }
    else if (connector === connectors_1.portis) {
        return (react_1["default"].createElement(IconWrapper, { size: 16 },
            react_1["default"].createElement("img", { src: portisIcon_png_1["default"], alt: '' })));
    }
    return null;
}
function Web3StatusInner() {
    var t = react_i18next_1.useTranslation().t;
    var _a = core_1.useWeb3React(), account = _a.account, connector = _a.connector, error = _a.error;
    var ENSName = useENSName_1["default"](account !== null && account !== void 0 ? account : undefined).ENSName;
    var allTransactions = hooks_2.useAllTransactions();
    var sortedRecentTransactions = react_1.useMemo(function () {
        var txs = Object.values(allTransactions);
        return txs.filter(hooks_2.isTransactionRecent).sort(newTransactionsFirst);
    }, [allTransactions]);
    var pending = sortedRecentTransactions.filter(function (tx) { return !tx.receipt; }).map(function (tx) { return tx.hash; });
    var hasPendingTransactions = !!pending.length;
    var hasSocks = useSocksBalance_1.useHasSocks();
    var toggleWalletModal = hooks_1.useWalletModalToggle();
    if (account) {
        return (react_1["default"].createElement(Web3StatusConnected, { id: "web3-status-connected", onClick: toggleWalletModal, pending: hasPendingTransactions },
            hasPendingTransactions ? (react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Text, null, pending === null || pending === void 0 ? void 0 :
                    pending.length,
                    " Pending"),
                " ",
                react_1["default"].createElement(Loader_1["default"], { stroke: "white" }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                hasSocks ? SOCK : null,
                react_1["default"].createElement(Text, null, ENSName || utils_1.shortenAddress(account)))),
            !hasPendingTransactions && connector && react_1["default"].createElement(StatusIcon, { connector: connector })));
    }
    else if (error) {
        return (react_1["default"].createElement(Web3StatusError, { onClick: toggleWalletModal },
            react_1["default"].createElement(NetworkIcon, null),
            react_1["default"].createElement(Text, null, error instanceof core_1.UnsupportedChainIdError ? 'Wrong Network' : 'Error')));
    }
    else {
        return (react_1["default"].createElement(Web3StatusConnect, { id: "connect-wallet", onClick: toggleWalletModal, faded: !account },
            react_1["default"].createElement(Text, null, t('Connect to a wallet'))));
    }
}
function Web3Status() {
    var _a = core_1.useWeb3React(), active = _a.active, account = _a.account;
    var contextNetwork = core_1.useWeb3React(constants_1.NetworkContextName);
    var ENSName = useENSName_1["default"](account !== null && account !== void 0 ? account : undefined).ENSName;
    var allTransactions = hooks_2.useAllTransactions();
    var sortedRecentTransactions = react_1.useMemo(function () {
        var txs = Object.values(allTransactions);
        return txs.filter(hooks_2.isTransactionRecent).sort(newTransactionsFirst);
    }, [allTransactions]);
    var pending = sortedRecentTransactions.filter(function (tx) { return !tx.receipt; }).map(function (tx) { return tx.hash; });
    var confirmed = sortedRecentTransactions.filter(function (tx) { return tx.receipt; }).map(function (tx) { return tx.hash; });
    if (!contextNetwork.active && !active) {
        return null;
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Web3StatusInner, null),
        react_1["default"].createElement(WalletModal_1["default"], { ENSName: ENSName !== null && ENSName !== void 0 ? ENSName : undefined, pendingTransactions: pending, confirmedTransactions: confirmed })));
}
exports["default"] = Web3Status;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
