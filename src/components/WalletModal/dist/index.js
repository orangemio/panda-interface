"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var styled_components_1 = require("styled-components");
var react_device_detect_1 = require("react-device-detect");
var core_1 = require("@web3-react/core");
var usePrevious_1 = require("../../hooks/usePrevious");
var hooks_1 = require("../../state/application/hooks");
var Modal_1 = require("../Modal");
var AccountDetails_1 = require("../AccountDetails");
var PendingView_1 = require("./PendingView");
var Option_1 = require("./Option");
var constants_1 = require("../../constants");
// import { ExternalLink } from '../../theme'
var metamask_png_1 = require("../../assets/images/metamask.png");
var x_svg_1 = require("../../assets/images/x.svg");
var connectors_1 = require("../../connectors");
var Fortmatic_1 = require("../../connectors/Fortmatic");
var walletconnect_connector_1 = require("@web3-react/walletconnect-connector");
var CloseIcon = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"], ["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"])));
var CloseColor = styled_components_1["default"](x_svg_1.ReactComponent)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  path {\n    stroke: ", ";\n  }\n"], ["\n  path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text4;
});
var Wrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"], ["\n  ", "\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
});
var HeaderRow = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"], ["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (props) { return (props.color === 'blue' ? function (_a) {
    var theme = _a.theme;
    return theme.primary1;
} : 'inherit'); }, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToMedium(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 1rem;\n  "], ["\n    padding: 1rem;\n  "])));
});
var ContentWrapper = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 2rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  ", ";\n"], ["\n  background-color: ", ";\n  padding: 2rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToMedium(templateObject_6 || (templateObject_6 = __makeTemplateObject(["padding: 1rem"], ["padding: 1rem"])));
});
var UpperSection = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"], ["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"
    // const Blurb = styled.div`
    //   ${({ theme }) => theme.flexRowNoWrap}
    //   align-items: center;
    //   justify-content: center;
    //   flex-wrap: wrap;
    //   margin-top: 2rem;
    //   ${({ theme }) => theme.mediaWidth.upToMedium`
    //     margin: 1rem;
    //     font-size: 12px;
    //   `};
    // `
])));
// const Blurb = styled.div`
//   ${({ theme }) => theme.flexRowNoWrap}
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   margin-top: 2rem;
//   ${({ theme }) => theme.mediaWidth.upToMedium`
//     margin: 1rem;
//     font-size: 12px;
//   `};
// `
var OptionGrid = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 10px;\n  ", ";\n"], ["\n  display: grid;\n  grid-gap: 10px;\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToMedium(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  "], ["\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  "])));
});
var HoverText = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  :hover {\n    cursor: pointer;\n  }\n"])));
var WALLET_VIEWS = {
    OPTIONS: 'options',
    OPTIONS_SECONDARY: 'options_secondary',
    ACCOUNT: 'account',
    PENDING: 'pending'
};
function WalletModal(_a) {
    var _this = this;
    var pendingTransactions = _a.pendingTransactions, confirmedTransactions = _a.confirmedTransactions, ENSName = _a.ENSName;
    // important that these are destructed from the account-specific web3-react context
    var _b = core_1.useWeb3React(), active = _b.active, account = _b.account, connector = _b.connector, activate = _b.activate, error = _b.error;
    var _c = react_1.useState(WALLET_VIEWS.ACCOUNT), walletView = _c[0], setWalletView = _c[1];
    var _d = react_1.useState(), pendingWallet = _d[0], setPendingWallet = _d[1];
    var _e = react_1.useState(), pendingError = _e[0], setPendingError = _e[1];
    var walletModalOpen = hooks_1.useWalletModalOpen();
    var toggleWalletModal = hooks_1.useWalletModalToggle();
    var previousAccount = usePrevious_1["default"](account);
    // close on connection, when logged out before
    react_1.useEffect(function () {
        if (account && !previousAccount && walletModalOpen) {
            toggleWalletModal();
        }
    }, [account, previousAccount, toggleWalletModal, walletModalOpen]);
    // always reset to account view
    react_1.useEffect(function () {
        if (walletModalOpen) {
            setPendingError(false);
            setWalletView(WALLET_VIEWS.ACCOUNT);
        }
    }, [walletModalOpen]);
    // close modal when a connection is successful
    var activePrevious = usePrevious_1["default"](active);
    var connectorPrevious = usePrevious_1["default"](connector);
    react_1.useEffect(function () {
        if (walletModalOpen && ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error))) {
            setWalletView(WALLET_VIEWS.ACCOUNT);
        }
    }, [setWalletView, active, error, connector, walletModalOpen, activePrevious, connectorPrevious]);
    var tryActivation = function (connector) { return __awaiter(_this, void 0, void 0, function () {
        var name;
        var _a, _b;
        return __generator(this, function (_c) {
            name = '';
            Object.keys(constants_1.SUPPORTED_WALLETS).map(function (key) {
                if (connector === constants_1.SUPPORTED_WALLETS[key].connector) {
                    return (name = constants_1.SUPPORTED_WALLETS[key].name);
                }
                return true;
            });
            // log selected wallet
            react_ga_1["default"].event({
                category: 'Wallet',
                action: 'Change Wallet',
                label: name
            });
            setPendingWallet(connector); // set wallet for pending view
            setWalletView(WALLET_VIEWS.PENDING);
            // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
            if (connector instanceof walletconnect_connector_1.WalletConnectConnector && ((_b = (_a = connector.walletConnectProvider) === null || _a === void 0 ? void 0 : _a.wc) === null || _b === void 0 ? void 0 : _b.uri)) {
                connector.walletConnectProvider = undefined;
            }
            connector &&
                activate(connector, undefined, true)["catch"](function (error) {
                    if (error instanceof core_1.UnsupportedChainIdError) {
                        activate(connector); // a little janky...can't use setError because the connector isn't set
                    }
                    else {
                        setPendingError(true);
                    }
                });
            return [2 /*return*/];
        });
    }); };
    // close wallet modal if fortmatic modal is active
    react_1.useEffect(function () {
        connectors_1.fortmatic.on(Fortmatic_1.OVERLAY_READY, function () {
            toggleWalletModal();
        });
    }, [toggleWalletModal]);
    // get wallets user can switch too, depending on device/browser
    function getOptions() {
        var isMetamask = window.ethereum && window.ethereum.isMetaMask;
        return Object.keys(constants_1.SUPPORTED_WALLETS).map(function (key) {
            var option = constants_1.SUPPORTED_WALLETS[key];
            // check for mobile options
            if (react_device_detect_1.isMobile) {
                //disable portis on mobile for now
                if (option.connector === connectors_1.portis) {
                    return null;
                }
                if (!window.web3 && !window.ethereum && option.mobile) {
                    return (react_1["default"].createElement(Option_1["default"], { onClick: function () {
                            option.connector !== connector && !option.href && tryActivation(option.connector);
                        }, id: "connect-" + key, key: key, active: option.connector && option.connector === connector, color: option.color, link: option.href, header: option.name, subheader: null, icon: require('../../assets/images/' + option.iconName) }));
                }
                return null;
            }
            // overwrite injected when needed
            if (option.connector === connectors_1.injected) {
                // don't show injected if there's no injected provider
                if (!(window.web3 || window.ethereum)) {
                    if (option.name === 'MetaMask') {
                        return (react_1["default"].createElement(Option_1["default"], { id: "connect-" + key, key: key, color: '#E8831D', header: 'Install Metamask', subheader: null, link: 'https://metamask.io/', icon: metamask_png_1["default"] }));
                    }
                    else {
                        return null; //dont want to return install twice
                    }
                }
                // don't return metamask if injected provider isn't metamask
                else if (option.name === 'MetaMask' && !isMetamask) {
                    return null;
                }
                // likewise for generic
                else if (option.name === 'Injected' && isMetamask) {
                    return null;
                }
            }
            // return rest of options
            return (!react_device_detect_1.isMobile &&
                !option.mobileOnly && (react_1["default"].createElement(Option_1["default"], { id: "connect-" + key, onClick: function () {
                    option.connector === connector
                        ? setWalletView(WALLET_VIEWS.ACCOUNT)
                        : !option.href && tryActivation(option.connector);
                }, key: key, active: option.connector === connector, color: option.color, link: option.href, header: option.name, subheader: null, icon: require('../../assets/images/' + option.iconName) })));
        });
    }
    function getModalContent() {
        if (error) {
            return (react_1["default"].createElement(UpperSection, null,
                react_1["default"].createElement(CloseIcon, { onClick: toggleWalletModal },
                    react_1["default"].createElement(CloseColor, null)),
                react_1["default"].createElement(HeaderRow, null, error instanceof core_1.UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'),
                react_1["default"].createElement(ContentWrapper, null, error instanceof core_1.UnsupportedChainIdError ? (react_1["default"].createElement("h5", null, "Please connect to the appropriate Ethereum network.")) : ('Error connecting. Try refreshing the page.'))));
        }
        if (account && walletView === WALLET_VIEWS.ACCOUNT) {
            return (react_1["default"].createElement(AccountDetails_1["default"], { toggleWalletModal: toggleWalletModal, pendingTransactions: pendingTransactions, confirmedTransactions: confirmedTransactions, ENSName: ENSName, openOptions: function () { return setWalletView(WALLET_VIEWS.OPTIONS); } }));
        }
        return (react_1["default"].createElement(UpperSection, null,
            react_1["default"].createElement(CloseIcon, { onClick: toggleWalletModal },
                react_1["default"].createElement(CloseColor, null)),
            walletView !== WALLET_VIEWS.ACCOUNT ? (react_1["default"].createElement(HeaderRow, { color: "blue" },
                react_1["default"].createElement(HoverText, { onClick: function () {
                        setPendingError(false);
                        setWalletView(WALLET_VIEWS.ACCOUNT);
                    } }, "Back"))) : (react_1["default"].createElement(HeaderRow, null,
                react_1["default"].createElement(HoverText, null, "Connect to a wallet"))),
            react_1["default"].createElement(ContentWrapper, null, walletView === WALLET_VIEWS.PENDING ? (react_1["default"].createElement(PendingView_1["default"], { connector: pendingWallet, error: pendingError, setPendingError: setPendingError, tryActivation: tryActivation })) : (react_1["default"].createElement(OptionGrid, null, getOptions())))));
    }
    return (react_1["default"].createElement(Modal_1["default"], { isOpen: walletModalOpen, onDismiss: toggleWalletModal, minHeight: false, maxHeight: 90 },
        react_1["default"].createElement(Wrapper, null, getModalContent())));
}
exports["default"] = WalletModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
