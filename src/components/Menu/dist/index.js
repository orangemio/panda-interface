"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = require("styled-components");
var menu_svg_1 = require("../../assets/images/menu.svg");
var useOnClickOutside_1 = require("../../hooks/useOnClickOutside");
var useToggle_1 = require("../../hooks/useToggle");
var theme_1 = require("../../theme");
var StyledMenuIcon = styled_components_1["default"](menu_svg_1.ReactComponent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  path {\n    stroke: ", ";\n  }\n"], ["\n  path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var StyledMenuButton = styled_components_1["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ", ";\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ", ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ", ";\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ", ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
});
var StyledMenu = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n"], ["\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n"])));
var MenuFlyout = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  min-width: 8.125rem;\n  background-color: ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 3rem;\n  right: 0rem;\n  z-index: 100;\n"], ["\n  min-width: 8.125rem;\n  background-color: ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 3rem;\n  right: 0rem;\n  z-index: 100;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
var MenuItem = styled_components_1["default"](theme_1.ExternalLink)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  padding: 0.5rem 0.5rem;\n  color: ", ";\n  :hover {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n  }\n  > svg {\n    margin-right: 8px;\n  }\n"], ["\n  flex: 1;\n  padding: 0.5rem 0.5rem;\n  color: ", ";\n  :hover {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n  }\n  > svg {\n    margin-right: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text2;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var CODE_LINK = 'https://github.com/Uniswap/uniswap-interface';
function Menu() {
    var node = react_1.useRef();
    var _a = useToggle_1["default"](false), open = _a[0], toggle = _a[1];
    useOnClickOutside_1.useOnClickOutside(node, open ? toggle : undefined);
    return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    react_1["default"].createElement(StyledMenu, { ref: node },
        react_1["default"].createElement(StyledMenuButton, { onClick: toggle },
            react_1["default"].createElement(StyledMenuIcon, null)),
        open && (react_1["default"].createElement(MenuFlyout, null,
            react_1["default"].createElement(MenuItem, { id: "link", href: "https://uniswap.org/" },
                react_1["default"].createElement(react_feather_1.Info, { size: 14 }),
                "About"),
            react_1["default"].createElement(MenuItem, { id: "link", href: "https://uniswap.org/docs/v2" },
                react_1["default"].createElement(react_feather_1.BookOpen, { size: 14 }),
                "Docs"),
            react_1["default"].createElement(MenuItem, { id: "link", href: CODE_LINK },
                react_1["default"].createElement(react_feather_1.Code, { size: 14 }),
                "Code"),
            react_1["default"].createElement(MenuItem, { id: "link", href: "https://discord.gg/EwFs3Pp" },
                react_1["default"].createElement(react_feather_1.MessageCircle, { size: 14 }),
                "Discord"),
            react_1["default"].createElement(MenuItem, { id: "link", href: "https://uniswap.info/" },
                react_1["default"].createElement(react_feather_1.PieChart, { size: 14 }),
                "Analytics")))));
}
exports["default"] = Menu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
