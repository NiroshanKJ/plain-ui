"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var _1 = require(".");
var helpers_1 = require("./helpers");
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  padding: 0.5em 1em;\n  font-size: 1em;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 0.4em;\n  // transition: all 0.3s ease;\n  background-color: var(", ");\n\n  &:hover {\n      font-weight: bold;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    \n  }\n"], ["\n  color: ", ";\n  display: inline-block;\n  padding: 0.5em 1em;\n  font-size: 1em;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 0.4em;\n  // transition: all 0.3s ease;\n  background-color: var(", ");\n\n  &:hover {\n      font-weight: bold;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    \n  }\n"])), function (props) { return props.$textwhite ? '#fff' : "#000"; }, function (props) { return (0, helpers_1.getBackgroundVariant)(props.$variant); });
var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick, children = _a.children, _b = _a.variant, variant = _b === void 0 ? _1.UIVariations.PRIMARY : _b, _c = _a.textWhite, textWhite = _c === void 0 ? true : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    return ((0, jsx_runtime_1.jsx)(StyledButton, { disabled: disabled, onClick: onClick, "$textwhite": textWhite.toString(), "$variant": variant, children: children || label }));
};
exports.Button = Button;
var templateObject_1;
