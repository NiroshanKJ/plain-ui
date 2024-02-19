"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Text = function (_a) {
    var type = _a.type, children = _a.children;
    var elementTypeMap = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        p: "p",
        label: "label",
        span: "span",
    };
    var ElementType = elementTypeMap[type] || "span";
    return (0, jsx_runtime_1.jsx)(ElementType, { children: children });
};
exports.Text = Text;
