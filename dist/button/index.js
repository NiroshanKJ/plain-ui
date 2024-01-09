var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { usePlainUIContext } from "../theme/provider";
import styled from "styled-components";
var PlainButton = function (_a) {
    var variant = _a.variant, label = _a.label, onClick = _a.onClick, style = _a.style;
    return (React.createElement("button", { style: style, onClick: onClick, type: "button" }, label));
};
var StyledButton = styled(PlainButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (props) {
    return props.variant
        ? props.theme.color[props.variant]
        : props.theme.color.primary;
});
export var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, label = _a.label, onClick = _a.onClick;
    var _c = usePlainUIContext(), dark = _c.dark, setDarkMode = _c.setDarkMode;
    return React.createElement(StyledButton, { variant: variant, label: label, onClick: onClick });
};
var templateObject_1;
