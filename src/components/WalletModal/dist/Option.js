"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../../theme");
var InfoCard = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 1rem;\n  outline: none;\n  border: 1px solid;\n  border-radius: 12px;\n  width: 100% !important;\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  border-color: ", ";\n"], ["\n  background-color: ", ";\n  padding: 1rem;\n  outline: none;\n  border: 1px solid;\n  border-radius: 12px;\n  width: 100% !important;\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  border-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, active = _a.active;
    return (active ? theme.bg3 : theme.bg2);
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme, active = _a.active;
    return (active ? 'transparent' : theme.bg3);
});
var OptionCard = styled_components_1["default"](InfoCard)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  padding: 1rem;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  padding: 1rem;\n"])));
var OptionCardLeft = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  justify-content: center;\n  height: 100%;\n"], ["\n  ", ";\n  justify-content: center;\n  height: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
});
var OptionCardClickable = styled_components_1["default"](OptionCard)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 0;\n  &:hover {\n    cursor: ", ";\n    border: ", ";\n  }\n  opacity: ", ";\n"], ["\n  margin-top: 0;\n  &:hover {\n    cursor: ", ";\n    border: ", ";\n  }\n  opacity: ", ";\n"])), function (_a) {
    var clickable = _a.clickable;
    return (clickable ? 'pointer' : '');
}, function (_a) {
    var clickable = _a.clickable, theme = _a.theme;
    return (clickable ? "1px solid " + theme.primary1 : "");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? '0.5' : '1');
});
var GreenCircle = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  justify-content: center;\n  align-items: center;\n\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin-right: 8px;\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"], ["\n  ", "\n  justify-content: center;\n  align-items: center;\n\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin-right: 8px;\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (_a) {
    var theme = _a.theme;
    return theme.green1;
});
var CircleWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.green1;
});
var HeaderText = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 500;\n"], ["\n  ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 500;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (props) { return (props.color === 'blue' ? function (_a) {
    var theme = _a.theme;
    return theme.primary1;
} : function (_a) {
    var theme = _a.theme;
    return theme.text1;
}); });
var SubHeader = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  margin-top: 10px;\n  font-size: 12px;\n"], ["\n  color: ", ";\n  margin-top: 10px;\n  font-size: 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var IconWrapper = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
}, function (_a) {
    var size = _a.size;
    return (size ? size + 'px' : '24px');
}, function (_a) {
    var size = _a.size;
    return (size ? size + 'px' : '24px');
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToMedium(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    align-items: flex-end;\n  "], ["\n    align-items: flex-end;\n  "])));
});
function Option(_a) {
    var _b = _a.link, link = _b === void 0 ? null : _b, _c = _a.clickable, clickable = _c === void 0 ? true : _c, size = _a.size, _d = _a.onClick, onClick = _d === void 0 ? null : _d, color = _a.color, header = _a.header, _e = _a.subheader, subheader = _e === void 0 ? null : _e, icon = _a.icon, _f = _a.active, active = _f === void 0 ? false : _f, id = _a.id;
    var content = (react_1["default"].createElement(OptionCardClickable, { id: id, onClick: onClick, clickable: clickable && !active, active: active },
        react_1["default"].createElement(OptionCardLeft, null,
            react_1["default"].createElement(HeaderText, { color: color },
                active ? (react_1["default"].createElement(CircleWrapper, null,
                    react_1["default"].createElement(GreenCircle, null,
                        react_1["default"].createElement("div", null)))) : (''),
                header),
            subheader && react_1["default"].createElement(SubHeader, null, subheader)),
        react_1["default"].createElement(IconWrapper, { size: size },
            react_1["default"].createElement("img", { src: icon, alt: 'Icon' }))));
    if (link) {
        return react_1["default"].createElement(theme_1.ExternalLink, { href: link }, content);
    }
    return content;
}
exports["default"] = Option;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
