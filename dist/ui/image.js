"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledImage = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var Image = function (_a) {
    var src = _a.src, _b = _a.alt, alt = _b === void 0 ? "" : _b;
    return (0, jsx_runtime_1.jsx)(StyledImage, { className: "image", src: src, alt: alt });
};
exports.Image = Image;
var templateObject_1;
