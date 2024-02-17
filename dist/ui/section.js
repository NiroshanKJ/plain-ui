"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  background-color: #efefef;\n  border: 1px solid #d6d6d6;\n  padding: 1em;\n  border-radius: 0.5em;\n"], ["\n  width: ", ";\n  background-color: #efefef;\n  border: 1px solid #d6d6d6;\n  padding: 1em;\n  border-radius: 0.5em;\n"])), function (props) { return props.$width; });
var Section = function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? "auto" : _b;
    return (0, jsx_runtime_1.jsx)(StyledDiv, { className: 'section', "$width": width, children: children });
};
exports.Section = Section;
var templateObject_1;
