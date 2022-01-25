"use strict";
exports.__esModule = true;
var react_1 = require("react");
var rebass_1 = require("rebass");
var theme_1 = require("../../theme");
var Button_1 = require("../Button");
var Card_1 = require("../Card");
var Column_1 = require("../Column");
var styleds_1 = require("./styleds");
var hooks_1 = require("../../state/user/hooks");
var lists_light_png_1 = require("../../assets/images/token-list/lists-light.png");
var lists_dark_png_1 = require("../../assets/images/token-list/lists-dark.png");
function ListIntroduction(_a) {
    var onSelectList = _a.onSelectList;
    var isDark = hooks_1.useDarkModeManager()[0];
    return (react_1["default"].createElement(Column_1["default"], { style: { width: '100%', flex: '1 1' } },
        react_1["default"].createElement(styleds_1.PaddedColumn, null,
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "14px" },
                react_1["default"].createElement("img", { style: { width: '120px', margin: '0 auto' }, src: isDark ? lists_dark_png_1["default"] : lists_light_png_1["default"], alt: "token-list-preview" }),
                react_1["default"].createElement("img", { style: { width: '100%', borderRadius: '12px' }, src: "https://cloudflare-ipfs.com/ipfs/QmRf1rAJcZjV3pwKTHfPdJh4RxR8yvRHkdLjZCsmp7T6hA", alt: "token-list-preview" }),
                react_1["default"].createElement(rebass_1.Text, { style: { marginBottom: '8px', textAlign: 'center' } },
                    "Uniswap now supports token lists. You can add your own custom lists via IPFS, HTTPS and ENS.",
                    ' '),
                react_1["default"].createElement(Button_1.ButtonPrimary, { onClick: onSelectList, id: "list-introduction-choose-a-list" }, "Choose a list"),
                react_1["default"].createElement(Card_1.OutlineCard, { style: { marginBottom: '8px', padding: '1rem' } },
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 400, fontSize: 14, style: { textAlign: 'center' } },
                        "Token lists are an",
                        ' ',
                        react_1["default"].createElement(theme_1.ExternalLink, { href: "https://github.com/uniswap/token-lists" }, "open specification"),
                        ". Check out",
                        ' ',
                        react_1["default"].createElement(theme_1.ExternalLink, { href: "https://tokenlists.org" }, "tokenlists.org"),
                        " to learn more."))))));
}
exports["default"] = ListIntroduction;
