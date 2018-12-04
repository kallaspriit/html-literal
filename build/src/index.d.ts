declare type ConcatenatableToken = object | string | number | undefined;
declare type ConcatenatableItem = ConcatenatableToken | Promise<ConcatenatableToken>;
declare type Concatenatable = ConcatenatableItem | ConcatenatableItem[];
export default function html(template: TemplateStringsArray, ...expressions: Concatenatable[]): string;
export {};
