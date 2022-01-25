"use strict";
exports.__esModule = true;
var token_lists_1 = require("@uniswap/token-lists");
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var react_redux_1 = require("react-redux");
var rebass_1 = require("rebass");
var hooks_1 = require("../../state/application/hooks");
var actions_1 = require("../../state/lists/actions");
var theme_1 = require("../../theme");
var listVersionLabel_1 = require("../../utils/listVersionLabel");
var Button_1 = require("../Button");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
function ListUpdatePopup(_a) {
    var popKey = _a.popKey, listUrl = _a.listUrl, oldList = _a.oldList, newList = _a.newList, auto = _a.auto;
    var removePopup = hooks_1.useRemovePopup();
    var removeThisPopup = react_1.useCallback(function () { return removePopup(popKey); }, [popKey, removePopup]);
    var dispatch = react_redux_1.useDispatch();
    var handleAcceptUpdate = react_1.useCallback(function () {
        if (auto)
            return;
        react_ga_1["default"].event({
            category: 'Lists',
            action: 'Update List from Popup',
            label: listUrl
        });
        dispatch(actions_1.acceptListUpdate(listUrl));
        removeThisPopup();
    }, [auto, dispatch, listUrl, removeThisPopup]);
    var _b = react_1.useMemo(function () {
        return token_lists_1.diffTokenLists(oldList.tokens, newList.tokens);
    }, [newList.tokens, oldList.tokens]), tokensAdded = _b.added, tokensChanged = _b.changed, tokensRemoved = _b.removed;
    var numTokensChanged = react_1.useMemo(function () {
        return Object.keys(tokensChanged).reduce(function (memo, chainId) { return memo + Object.keys(tokensChanged[chainId]).length; }, 0);
    }, [tokensChanged]);
    return (react_1["default"].createElement(Row_1.AutoRow, null,
        react_1["default"].createElement(Column_1.AutoColumn, { style: { flex: '1' }, gap: "8px" }, auto ? (react_1["default"].createElement(theme_1.TYPE.body, { fontWeight: 500 },
            "The token list \"",
            oldList.name,
            "\" has been updated to",
            ' ',
            react_1["default"].createElement("strong", null, listVersionLabel_1["default"](newList.version)),
            ".")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(rebass_1.Text, null,
                    "An update is available for the token list \"",
                    oldList.name,
                    "\" (",
                    listVersionLabel_1["default"](oldList.version),
                    " to ",
                    listVersionLabel_1["default"](newList.version),
                    ")."),
                react_1["default"].createElement("ul", null,
                    tokensAdded.length > 0 ? (react_1["default"].createElement("li", null,
                        tokensAdded.map(function (token, i) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: token.chainId + "-" + token.address },
                            react_1["default"].createElement("strong", { title: token.address }, token.symbol),
                            i === tokensAdded.length - 1 ? null : ', ')); }),
                        ' ',
                        "added")) : null,
                    tokensRemoved.length > 0 ? (react_1["default"].createElement("li", null,
                        tokensRemoved.map(function (token, i) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: token.chainId + "-" + token.address },
                            react_1["default"].createElement("strong", { title: token.address }, token.symbol),
                            i === tokensRemoved.length - 1 ? null : ', ')); }),
                        ' ',
                        "removed")) : null,
                    numTokensChanged > 0 ? react_1["default"].createElement("li", null,
                        numTokensChanged,
                        " tokens updated") : null)),
            react_1["default"].createElement(Row_1.AutoRow, null,
                react_1["default"].createElement("div", { style: { flexGrow: 1, marginRight: 12 } },
                    react_1["default"].createElement(Button_1.ButtonSecondary, { onClick: handleAcceptUpdate }, "Accept update")),
                react_1["default"].createElement("div", { style: { flexGrow: 1 } },
                    react_1["default"].createElement(Button_1.ButtonSecondary, { onClick: removeThisPopup }, "Dismiss"))))))));
}
exports["default"] = ListUpdatePopup;
