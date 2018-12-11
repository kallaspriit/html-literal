import { stringify } from "flatted";
import stripIndent from "strip-indent";

// list of possible simple values
type ConcatenatableToken = object | string | number | undefined;

// concatenatable item is either a simple value or a promise of one
type ConcatenatableItem = ConcatenatableToken | Promise<ConcatenatableToken>;

// concatenatable is either a concatenatable item or an array of them
type Concatenatable = ConcatenatableItem | ConcatenatableItem[];

// html tag function, accepts simple values, arrays, promises
export default function html(template: TemplateStringsArray, ...expressions: Concatenatable[]): string {
  let result = "";
  let i = 0;

  // resolve each expression and build the result string
  for (const part of template) {
    const expression = expressions[i++ - 1]; // this might be an array
    const resolvedExpression = resolveExpression(expression);

    result += `${resolvedExpression}${part}`;
  }

  // strip indentation and trim the result
  return stripIndent(result).trim();
}

// returns whether given value is likely a promise
// tslint:disable-next-line:no-any
function isPromise<T>(p: any): p is Promise<T> {
  return p !== undefined && p !== null && typeof p === "object" && typeof p.then === "function";
}

// resolves a concatenatable expression to a string (async)
function resolveExpression(expression: Concatenatable): string {
  // return empty string for undefined
  if (expression === undefined) {
    return "";
  }

  // return placeholder for promise
  if (isPromise<ConcatenatableToken>(expression)) {
    // recursively resolve
    return "[promise]";
  }

  // return placeholder for function
  if (typeof expression === "function") {
    return "[function]";
  }

  // handle arrays
  if (Array.isArray(expression)) {
    const items: ConcatenatableToken[] = [];

    // resolve each item (might be promises as well)
    for (const expressionItem of expression) {
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
  return stringify(expression, undefined, 2);
}
