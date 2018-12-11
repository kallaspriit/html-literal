"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var flatted_1 = require("flatted");
var strip_indent_1 = __importDefault(require("strip-indent"));
// html tag function, accepts simple values, arrays, promises
function html(template) {
    var expressions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expressions[_i - 1] = arguments[_i];
    }
    var result = "";
    var i = 0;
    // resolve each expression and build the result string
    for (var _a = 0, template_1 = template; _a < template_1.length; _a++) {
        var part = template_1[_a];
        var expression = expressions[i++ - 1]; // this might be an array
        var resolvedExpression = resolveExpression(expression);
        result += "" + resolvedExpression + part;
    }
    // strip indentation and trim the result
    return strip_indent_1.default(result).trim();
}
exports.default = html;
// returns whether given value is likely a promise
// tslint:disable-next-line:no-any
function isPromise(p) {
    return p !== undefined && p !== null && typeof p === "object" && typeof p.then === "function";
}
// resolves a concatenatable expression to a string (async)
function resolveExpression(expression) {
    // return empty string for undefined
    if (expression === undefined) {
        return "";
    }
    // return placeholder for promise
    if (isPromise(expression)) {
        // recursively resolve
        return "[promise]";
    }
    // return placeholder for function
    if (typeof expression === "function") {
        return "[function]";
    }
    // handle arrays
    if (Array.isArray(expression)) {
        var items = [];
        // resolve each item (might be promises as well)
        for (var _i = 0, expression_1 = expression; _i < expression_1.length; _i++) {
            var expressionItem = expression_1[_i];
            items.push(resolveExpression(expressionItem));
        }
        // join with newline
        return items.join("\n");
    }
    // return unmodified if got a string
    if (typeof expression === "string") {
        return expression;
    }
    // convert to string if got a number
    if (typeof expression === "number") {
        return expression.toString();
    }
    // return stringified value, handles circular references
    return flatted_1.stringify(expression, undefined, 2);
}
//# sourceMappingURL=index.js.map