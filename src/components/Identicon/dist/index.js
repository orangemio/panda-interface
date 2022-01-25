"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../hooks");
var jazzicon_1 = require("jazzicon");
var StyledIdenticonContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 1rem;\n  width: 1rem;\n  border-radius: 1.125rem;\n  background-color: ", ";\n"], ["\n  height: 1rem;\n  width: 1rem;\n  border-radius: 1.125rem;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg4;
});
function Identicon() {
    var ref = react_1.useRef();
    var account = hooks_1.useActiveWeb3React().account;
    react_1.useEffect(function () {
        if (account && ref.current) {
            ref.current.innerHTML = '';
            ref.current.appendChild(jazzicon_1["default"](16, parseInt(account.slice(2, 10), 16)));
        }
    }, [account]);
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    return react_1["default"].createElement(StyledIdenticonContainer, { ref: ref });
}
exports["default"] = Identicon;
var templateObject_1;
