"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AddRemoveTabs = exports.FindPoolTabs = exports.SwapPoolTabs = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
var react_i18next_1 = require("react-i18next");
var react_router_dom_1 = require("react-router-dom");
var react_feather_1 = require("react-feather");
var Row_1 = require("../Row");
var QuestionHelper_1 = require("../QuestionHelper");
var Tabs = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"], ["\n  ", "\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
});
var activeClassName = 'ACTIVE';
var StyledNavLink = styled_components_1["default"](react_router_dom_1.NavLink).attrs({
    activeClassName: activeClassName
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"], ["\n  ", "\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, activeClassName, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.text1);
});
var ActiveText = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 20px;\n"], ["\n  font-weight: 500;\n  font-size: 20px;\n"])));
var StyledArrowLeft = styled_components_1["default"](react_feather_1.ArrowLeft)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function SwapPoolTabs(_a) {
    var active = _a.active;
    var t = react_i18next_1.useTranslation().t;
    return (react_1["default"].createElement(Tabs, { style: { marginBottom: '20px' } },
        react_1["default"].createElement(StyledNavLink, { id: "swap-nav-link", to: '/swap', isActive: function () { return active === 'swap'; } }, t('swap')),
        react_1["default"].createElement(StyledNavLink, { id: "pool-nav-link", to: '/pool', isActive: function () { return active === 'pool'; } }, t('pool'))));
}
exports.SwapPoolTabs = SwapPoolTabs;
function FindPoolTabs() {
    return (react_1["default"].createElement(Tabs, null,
        react_1["default"].createElement(Row_1.RowBetween, { style: { padding: '1rem' } },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/pool" },
                react_1["default"].createElement(StyledArrowLeft, null)),
            react_1["default"].createElement(ActiveText, null, "Import Pool"),
            react_1["default"].createElement(QuestionHelper_1["default"], { text: "Use this tool to find pairs that don't automatically appear in the interface." }))));
}
exports.FindPoolTabs = FindPoolTabs;
function AddRemoveTabs(_a) {
    var adding = _a.adding;
    return (react_1["default"].createElement(Tabs, null,
        react_1["default"].createElement(Row_1.RowBetween, { style: { padding: '1rem' } },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/pool" },
                react_1["default"].createElement(StyledArrowLeft, null)),
            react_1["default"].createElement(ActiveText, null,
                adding ? 'Add' : 'Remove',
                " Liquidity"),
            react_1["default"].createElement(QuestionHelper_1["default"], { text: adding
                    ? 'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
                    : 'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.' }))));
}
exports.AddRemoveTabs = AddRemoveTabs;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
