"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ListSelect = void 0;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var react_ga_1 = require("react-ga");
var react_popper_1 = require("react-popper");
var react_redux_1 = require("react-redux");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var dropdown_svg_1 = require("../../assets/images/dropdown.svg");
var useFetchListCallback_1 = require("../../hooks/useFetchListCallback");
var useOnClickOutside_1 = require("../../hooks/useOnClickOutside");
var useToggle_1 = require("../../hooks/useToggle");
var actions_1 = require("../../state/lists/actions");
var hooks_1 = require("../../state/lists/hooks");
var theme_1 = require("../../theme");
var listVersionLabel_1 = require("../../utils/listVersionLabel");
var parseENSAddress_1 = require("../../utils/parseENSAddress");
var uriToHttp_1 = require("../../utils/uriToHttp");
var Button_1 = require("../Button");
var Column_1 = require("../Column");
var ListLogo_1 = require("../ListLogo");
var QuestionHelper_1 = require("../QuestionHelper");
var Row_1 = require("../Row");
var styleds_1 = require("./styleds");
var UnpaddedLinkStyledButton = styled_components_1["default"](theme_1.LinkStyledButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"], ["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? '0.4' : '1');
});
var PopoverContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 100;\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ", ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"], ["\n  z-index: 100;\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ", ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"])), function (props) { return (props.show ? 'visible' : 'hidden'); }, function (props) { return (props.show ? 1 : 0); }, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
});
var StyledMenu = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"])));
var StyledListUrlText = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
function ListOrigin(_a) {
    var listUrl = _a.listUrl;
    var ensName = react_1.useMemo(function () { var _a; return (_a = parseENSAddress_1.parseENSAddress(listUrl)) === null || _a === void 0 ? void 0 : _a.ensName; }, [listUrl]);
    var host = react_1.useMemo(function () {
        if (ensName)
            return undefined;
        var lowerListUrl = listUrl.toLowerCase();
        if (lowerListUrl.startsWith('ipfs://') || lowerListUrl.startsWith('ipns://')) {
            return listUrl;
        }
        try {
            var url = new URL(listUrl);
            return url.host;
        }
        catch (error) {
            return undefined;
        }
    }, [listUrl, ensName]);
    return react_1["default"].createElement(react_1["default"].Fragment, null, ensName !== null && ensName !== void 0 ? ensName : host);
}
function listUrlRowHTMLId(listUrl) {
    return "list-row-" + listUrl.replace(/\./g, '-');
}
var ListRow = react_1.memo(function ListRow(_a) {
    var listUrl = _a.listUrl, onBack = _a.onBack;
    var listsByUrl = react_redux_1.useSelector(function (state) { return state.lists.byUrl; });
    var selectedListUrl = hooks_1.useSelectedListUrl();
    var dispatch = react_redux_1.useDispatch();
    var _b = listsByUrl[listUrl], list = _b.current, pending = _b.pendingUpdate;
    var isSelected = listUrl === selectedListUrl;
    var _c = useToggle_1["default"](false), open = _c[0], toggle = _c[1];
    var node = react_1.useRef();
    var _d = react_1.useState(), referenceElement = _d[0], setReferenceElement = _d[1];
    var _e = react_1.useState(), popperElement = _e[0], setPopperElement = _e[1];
    var _f = react_popper_1.usePopper(referenceElement, popperElement, {
        placement: 'auto',
        strategy: 'fixed',
        modifiers: [{ name: 'offset', options: { offset: [8, 8] } }]
    }), styles = _f.styles, attributes = _f.attributes;
    useOnClickOutside_1.useOnClickOutside(node, open ? toggle : undefined);
    var selectThisList = react_1.useCallback(function () {
        if (isSelected)
            return;
        react_ga_1["default"].event({
            category: 'Lists',
            action: 'Select List',
            label: listUrl
        });
        dispatch(actions_1.selectList(listUrl));
        onBack();
    }, [dispatch, isSelected, listUrl, onBack]);
    var handleAcceptListUpdate = react_1.useCallback(function () {
        if (!pending)
            return;
        react_ga_1["default"].event({
            category: 'Lists',
            action: 'Update List from List Select',
            label: listUrl
        });
        dispatch(actions_1.acceptListUpdate(listUrl));
    }, [dispatch, listUrl, pending]);
    var handleRemoveList = react_1.useCallback(function () {
        react_ga_1["default"].event({
            category: 'Lists',
            action: 'Start Remove List',
            label: listUrl
        });
        if (window.prompt("Please confirm you would like to remove this list by typing REMOVE") === "REMOVE") {
            react_ga_1["default"].event({
                category: 'Lists',
                action: 'Confirm Remove List',
                label: listUrl
            });
            dispatch(actions_1.removeList(listUrl));
        }
    }, [dispatch, listUrl]);
    if (!list)
        return null;
    return (react_1["default"].createElement(Row_1["default"], { key: listUrl, align: "center", padding: "16px", id: listUrlRowHTMLId(listUrl) },
        list.logoURI ? (react_1["default"].createElement(ListLogo_1["default"], { style: { marginRight: '1rem' }, logoURI: list.logoURI, alt: list.name + " list logo" })) : (react_1["default"].createElement("div", { style: { width: '24px', height: '24px', marginRight: '1rem' } })),
        react_1["default"].createElement(Column_1["default"], { style: { flex: '1' } },
            react_1["default"].createElement(Row_1["default"], null,
                react_1["default"].createElement(rebass_1.Text, { fontWeight: isSelected ? 500 : 400, fontSize: 16, style: { overflow: 'hidden', textOverflow: 'ellipsis' } }, list.name)),
            react_1["default"].createElement(Row_1["default"], { style: {
                    marginTop: '4px'
                } },
                react_1["default"].createElement(StyledListUrlText, { title: listUrl },
                    react_1["default"].createElement(ListOrigin, { listUrl: listUrl })))),
        react_1["default"].createElement(StyledMenu, { ref: node },
            react_1["default"].createElement(Button_1.ButtonOutlined, { style: {
                    width: '2rem',
                    padding: '.8rem .35rem',
                    borderRadius: '12px',
                    fontSize: '14px',
                    marginRight: '0.5rem'
                }, onClick: toggle, ref: setReferenceElement },
                react_1["default"].createElement(dropdown_svg_1.ReactComponent, null)),
            open && (react_1["default"].createElement(PopoverContainer, __assign({ show: true, ref: setPopperElement, style: styles.popper }, attributes.popper),
                react_1["default"].createElement("div", null, list && listVersionLabel_1["default"](list.version)),
                react_1["default"].createElement(styleds_1.SeparatorDark, null),
                react_1["default"].createElement(theme_1.ExternalLink, { href: "https://tokenlists.org/token-list?url=" + listUrl }, "View list"),
                react_1["default"].createElement(UnpaddedLinkStyledButton, { onClick: handleRemoveList, disabled: Object.keys(listsByUrl).length === 1 }, "Remove list"),
                pending && (react_1["default"].createElement(UnpaddedLinkStyledButton, { onClick: handleAcceptListUpdate }, "Update list"))))),
        isSelected ? (react_1["default"].createElement(Button_1.ButtonPrimary, { disabled: true, className: "select-button", style: { width: '5rem', minWidth: '5rem', padding: '0.5rem .35rem', borderRadius: '12px', fontSize: '14px' } }, "Selected")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Button_1.ButtonPrimary, { className: "select-button", style: {
                    width: '5rem',
                    minWidth: '4.5rem',
                    padding: '0.5rem .35rem',
                    borderRadius: '12px',
                    fontSize: '14px'
                }, onClick: selectThisList }, "Select")))));
});
var AddListButton = styled_components_1["default"](Button_1.ButtonSecondary)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  /* height: 1.8rem; */\n  max-width: 4rem;\n  margin-left: 1rem;\n  border-radius: 12px;\n  padding: 10px 18px;\n"], ["\n  /* height: 1.8rem; */\n  max-width: 4rem;\n  margin-left: 1rem;\n  border-radius: 12px;\n  padding: 10px 18px;\n"])));
var ListContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n  overflow: auto;\n"], ["\n  flex: 1;\n  overflow: auto;\n"])));
function ListSelect(_a) {
    var _b;
    var onDismiss = _a.onDismiss, onBack = _a.onBack;
    var _c = react_1.useState(''), listUrlInput = _c[0], setListUrlInput = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var lists = react_redux_1.useSelector(function (state) { return state.lists.byUrl; });
    var adding = Boolean((_b = lists[listUrlInput]) === null || _b === void 0 ? void 0 : _b.loadingRequestId);
    var _d = react_1.useState(null), addError = _d[0], setAddError = _d[1];
    var handleInput = react_1.useCallback(function (e) {
        setListUrlInput(e.target.value);
        setAddError(null);
    }, []);
    var fetchList = useFetchListCallback_1.useFetchListCallback();
    var handleAddList = react_1.useCallback(function () {
        if (adding)
            return;
        setAddError(null);
        fetchList(listUrlInput)
            .then(function () {
            setListUrlInput('');
            react_ga_1["default"].event({
                category: 'Lists',
                action: 'Add List',
                label: listUrlInput
            });
        })["catch"](function (error) {
            react_ga_1["default"].event({
                category: 'Lists',
                action: 'Add List Failed',
                label: listUrlInput
            });
            setAddError(error.message);
            dispatch(actions_1.removeList(listUrlInput));
        });
    }, [adding, dispatch, fetchList, listUrlInput]);
    var validUrl = react_1.useMemo(function () {
        return uriToHttp_1["default"](listUrlInput).length > 0 || Boolean(parseENSAddress_1.parseENSAddress(listUrlInput));
    }, [listUrlInput]);
    var handleEnterKey = react_1.useCallback(function (e) {
        if (validUrl && e.key === 'Enter') {
            handleAddList();
        }
    }, [handleAddList, validUrl]);
    var sortedLists = react_1.useMemo(function () {
        var listUrls = Object.keys(lists);
        return listUrls
            .filter(function (listUrl) {
            return Boolean(lists[listUrl].current);
        })
            .sort(function (u1, u2) {
            var l1 = lists[u1].current;
            var l2 = lists[u2].current;
            if (l1 && l2) {
                return l1.name.toLowerCase() < l2.name.toLowerCase()
                    ? -1
                    : l1.name.toLowerCase() === l2.name.toLowerCase()
                        ? 0
                        : 1;
            }
            if (l1)
                return -1;
            if (l2)
                return 1;
            return 0;
        });
    }, [lists]);
    return (react_1["default"].createElement(Column_1["default"], { style: { width: '100%', flex: '1 1' } },
        react_1["default"].createElement(styleds_1.PaddedColumn, null,
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(react_feather_1.ArrowLeft, { style: { cursor: 'pointer' }, onClick: onBack })),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Manage Lists"),
                react_1["default"].createElement(theme_1.CloseIcon, { onClick: onDismiss }))),
        react_1["default"].createElement(styleds_1.Separator, null),
        react_1["default"].createElement(styleds_1.PaddedColumn, { gap: "14px" },
            react_1["default"].createElement(rebass_1.Text, { fontWeight: 600 },
                "Add a list",
                ' ',
                react_1["default"].createElement(QuestionHelper_1["default"], { text: "Token lists are an open specification for lists of ERC20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious ERC20 tokens." })),
            react_1["default"].createElement(Row_1["default"], null,
                react_1["default"].createElement(styleds_1.SearchInput, { type: "text", id: "list-add-input", placeholder: "https:// or ipfs:// or ENS name", value: listUrlInput, onChange: handleInput, onKeyDown: handleEnterKey, style: { height: '2.75rem', borderRadius: 12, padding: '12px' } }),
                react_1["default"].createElement(AddListButton, { onClick: handleAddList, disabled: !validUrl }, "Add")),
            addError ? (react_1["default"].createElement(theme_1.TYPE.error, { title: addError, style: { textOverflow: 'ellipsis', overflow: 'hidden' }, error: true }, addError)) : null),
        react_1["default"].createElement(styleds_1.Separator, null),
        react_1["default"].createElement(ListContainer, null, sortedLists.map(function (listUrl) { return (react_1["default"].createElement(ListRow, { key: listUrl, listUrl: listUrl, onBack: onBack })); })),
        react_1["default"].createElement(styleds_1.Separator, null),
        react_1["default"].createElement("div", { style: { padding: '16px', textAlign: 'center' } },
            react_1["default"].createElement(theme_1.ExternalLink, { href: "https://tokenlists.org" }, "Browse lists"))));
}
exports.ListSelect = ListSelect;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
