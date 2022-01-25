"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var qs_1 = require("qs");
var actions_1 = require("../state/user/actions");
function DarkModeQueryParamReader(_a) {
    var search = _a.location.search;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (!search)
            return;
        if (search.length < 2)
            return;
        var parsed = qs_1.parse(search, {
            parseArrays: false,
            ignoreQueryPrefix: true
        });
        var theme = parsed.theme;
        if (typeof theme !== 'string')
            return;
        if (theme.toLowerCase() === 'light') {
            dispatch(actions_1.updateUserDarkMode({ userDarkMode: false }));
        }
        else if (theme.toLowerCase() === 'dark') {
            dispatch(actions_1.updateUserDarkMode({ userDarkMode: true }));
        }
    }, [dispatch, search]);
    return null;
}
exports["default"] = DarkModeQueryParamReader;
