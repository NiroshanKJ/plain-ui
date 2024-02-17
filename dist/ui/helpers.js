"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackgroundVariant = void 0;
var _1 = require(".");
var getBackgroundVariant = function (variant) {
    switch (variant) {
        case _1.UIVariations.PRIMARY:
            return "--bg-primary";
        case _1.UIVariations.SECONDARY:
            return "--bg-secondary";
        case _1.UIVariations.SUCCESS:
            return "--bg-secondary";
        case _1.UIVariations.WARNING:
            return "--bg-warning";
        case _1.UIVariations.DANGER:
            return "--bg-danger";
        case _1.UIVariations.INFO:
            return "--bg-info";
    }
};
exports.getBackgroundVariant = getBackgroundVariant;
