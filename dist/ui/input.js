"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
var StyledInput = styled_components_1.default.input.attrs(function (props) { return ({
    disabled: props.disabled,
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 13px 10px;\n  border: 0.1em solid #cdcdcd;\n  border-radius: 0.5em;\n  cursor: pointer;\n  font-size: 1em;\n  min-width: 15em;\n  margin-bottom: 1em;\n\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  padding: 13px 10px;\n  border: 0.1em solid #cdcdcd;\n  border-radius: 0.5em;\n  cursor: pointer;\n  font-size: 1em;\n  min-width: 15em;\n  margin-bottom: 1em;\n\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n"])), function (props) {
    return props.disabled && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      opacity: 0.6;\n      cursor: not-allowed;\n      pointer-events: none;\n    "], ["\n      opacity: 0.6;\n      cursor: not-allowed;\n      pointer-events: none;\n    "])));
});
var StyledLabel = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n  display: block;\n"], ["\n  font-weight: bold;\n  display: block;\n"])));
var Input = function (_a) {
    var label = _a.label, onChange = _a.onChange, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? "text" : _c;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "input", children: [(0, jsx_runtime_1.jsx)(StyledLabel, { className: "input-label", children: label }), (0, jsx_runtime_1.jsx)(StyledInput, { type: type, disabled: disabled, onChange: onChange })] }));
};
exports.Input = Input;
var templateObject_1, templateObject_2, templateObject_3;
