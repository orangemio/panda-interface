"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = require("styled-components");
var useOnClickOutside_1 = require("../../hooks/useOnClickOutside");
var hooks_1 = require("../../state/user/hooks");
var TransactionSettings_1 = require("../TransactionSettings");
var Row_1 = require("../Row");
var theme_1 = require("../../theme");
var QuestionHelper_1 = require("../QuestionHelper");
var Toggle_1 = require("../Toggle");
var styled_components_2 = require("styled-components");
var Column_1 = require("../Column");
var Button_1 = require("../Button");
var hooks_2 = require("../../state/application/hooks");
var rebass_1 = require("rebass");
var Modal_1 = require("../Modal");
var StyledMenuIcon = styled_components_1["default"](react_feather_1.Settings)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20px;\n  width: 20px;\n\n  > * {\n    stroke: ", ";\n  }\n"], ["\n  height: 20px;\n  width: 20px;\n\n  > * {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var StyledCloseIcon = styled_components_1["default"](react_feather_1.X)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 20px;\n  width: 20px;\n  :hover {\n    cursor: pointer;\n  }\n\n  > * {\n    stroke: ", ";\n  }\n"], ["\n  height: 20px;\n  width: 20px;\n  :hover {\n    cursor: pointer;\n  }\n\n  > * {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var StyledMenuButton = styled_components_1["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ", ";\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ", ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ", ";\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ", ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
});
var EmojiWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  bottom: -6px;\n  right: 0px;\n  font-size: 14px;\n"], ["\n  position: absolute;\n  bottom: -6px;\n  right: 0px;\n  font-size: 14px;\n"])));
var StyledMenu = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n"], ["\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n"])));
var MenuFlyout = styled_components_1["default"].span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  min-width: 20.125rem;\n  background-color: ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n\n  border: 1px solid ", ";\n\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 3rem;\n  right: 0rem;\n  z-index: 100;\n\n  ", ";\n"], ["\n  min-width: 20.125rem;\n  background-color: ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n\n  border: 1px solid ", ";\n\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 3rem;\n  right: 0rem;\n  z-index: 100;\n\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToExtraSmall(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    min-width: 18.125rem;\n    right: -46px;\n  "], ["\n    min-width: 18.125rem;\n    right: -46px;\n  "])));
});
var Break = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
var ModalContentWrapper = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  background-color: ", ";\n  border-radius: 20px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  background-color: ", ";\n  border-radius: 20px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
function SettingsTab() {
    var node = react_1.useRef();
    var open = hooks_2.useSettingsMenuOpen();
    var toggle = hooks_2.useToggleSettingsMenu();
    var theme = react_1.useContext(styled_components_2.ThemeContext);
    var _a = hooks_1.useUserSlippageTolerance(), userSlippageTolerance = _a[0], setUserslippageTolerance = _a[1];
    var _b = hooks_1.useUserDeadline(), deadline = _b[0], setDeadline = _b[1];
    var _c = hooks_1.useExpertModeManager(), expertMode = _c[0], toggleExpertMode = _c[1];
    var _d = hooks_1.useDarkModeManager(), darkMode = _d[0], toggleDarkMode = _d[1];
    // show confirmation view before turning on
    var _e = react_1.useState(false), showConfirmation = _e[0], setShowConfirmation = _e[1];
    useOnClickOutside_1.useOnClickOutside(node, open ? toggle : undefined);
    return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    react_1["default"].createElement(StyledMenu, { ref: node },
        react_1["default"].createElement(Modal_1["default"], { isOpen: showConfirmation, onDismiss: function () { return setShowConfirmation(false); }, maxHeight: 100 },
            react_1["default"].createElement(ModalContentWrapper, null,
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "lg" },
                    react_1["default"].createElement(Row_1.RowBetween, { style: { padding: '0 2rem' } },
                        react_1["default"].createElement("div", null),
                        react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Are you sure?"),
                        react_1["default"].createElement(StyledCloseIcon, { onClick: function () { return setShowConfirmation(false); } })),
                    react_1["default"].createElement(Break, null),
                    react_1["default"].createElement(Column_1.AutoColumn, { gap: "lg", style: { padding: '0 2rem' } },
                        react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds."),
                        react_1["default"].createElement(rebass_1.Text, { fontWeight: 600, fontSize: 20 }, "ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING."),
                        react_1["default"].createElement(Button_1.ButtonError, { error: true, padding: '12px', onClick: function () {
                                if (window.prompt("Please type the word \"confirm\" to enable expert mode.") === 'confirm') {
                                    toggleExpertMode();
                                    setShowConfirmation(false);
                                }
                            } },
                            react_1["default"].createElement(rebass_1.Text, { fontSize: 20, fontWeight: 500, id: "confirm-expert-mode" }, "Turn On Expert Mode")))))),
        react_1["default"].createElement(StyledMenuButton, { onClick: toggle, id: "open-settings-dialog-button" },
            react_1["default"].createElement(StyledMenuIcon, null),
            expertMode && (react_1["default"].createElement(EmojiWrapper, null,
                react_1["default"].createElement("span", { role: "img", "aria-label": "wizard-icon" }, "\uD83E\uDDD9")))),
        open && (react_1["default"].createElement(MenuFlyout, null,
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "md", style: { padding: '1rem' } },
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 600, fontSize: 14 }, "Transaction Settings"),
                react_1["default"].createElement(TransactionSettings_1["default"], { rawSlippage: userSlippageTolerance, setRawSlippage: setUserslippageTolerance, deadline: deadline, setDeadline: setDeadline }),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 600, fontSize: 14 }, "Interface Settings"),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(theme_1.TYPE.black, { fontWeight: 400, fontSize: 14, color: theme.text2 }, "Toggle Expert Mode"),
                        react_1["default"].createElement(QuestionHelper_1["default"], { text: "Bypasses confirmation modals and allows high slippage trades. Use at your own risk." })),
                    react_1["default"].createElement(Toggle_1["default"], { id: "toggle-expert-mode-button", isActive: expertMode, toggle: expertMode
                            ? function () {
                                toggleExpertMode();
                                setShowConfirmation(false);
                            }
                            : function () {
                                toggle();
                                setShowConfirmation(true);
                            } })),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(Row_1.RowFixed, null,
                        react_1["default"].createElement(theme_1.TYPE.black, { fontWeight: 400, fontSize: 14, color: theme.text2 }, "Toggle Dark Mode")),
                    react_1["default"].createElement(Toggle_1["default"], { isActive: darkMode, toggle: toggleDarkMode })))))));
}
exports["default"] = SettingsTab;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
