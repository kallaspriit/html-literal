"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __importDefault(require("../src"));
var info = {
    name: "Chuck Norris",
    age: 42,
    jokes: [
        "Chuck Norris counted to infinity. Twice.",
        "When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.",
    ],
    details: {
        Residence: "Navasota, Texas, U.S.",
        Occupation: "Actor, martial artist, film producer, screenwriter, air policeman (U.S. Air Force).",
    },
    weakness: undefined,
    enemy: function () { return "none"; },
    getInterests: function () { return Promise.resolve(); },
};
var output = src_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  <h1>HTML Tagged Template Literal</h1>\n  <p>Name: ", "</p>\n  <p>Age: ", "</p>\n  <p>Details: <pre>", "</pre></p>\n  <p>Weakness: ", "</p>\n  <p>Enemy: ", "</p>\n  <p>Interests: ", "</p>\n  <ul>\n    ", "\n  </ul>\n"], ["\n  <h1>HTML Tagged Template Literal</h1>\n  <p>Name: ", "</p>\n  <p>Age: ", "</p>\n  <p>Details: <pre>", "</pre></p>\n  <p>Weakness: ", "</p>\n  <p>Enemy: ", "</p>\n  <p>Interests: ", "</p>\n  <ul>\n    ",
    "\n  </ul>\n"])), info.name, info.age, info.details, info.weakness, info.enemy, info.getInterests(), info.jokes.map(function (joke) {
    return src_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          <li>", "</li>\n        "], ["\n          <li>", "</li>\n        "])), joke);
}));
console.log(output);
var templateObject_1, templateObject_2;
/*
<h1>HTML Tagged Template Literal</h1>
<p>Name: Chuck Norris</p>
<p>Age: 42</p>
<p>Details: <pre>{
  "Residence": "Navasota, Texas, U.S.",
  "Occupation": "Actor, martial artist, film producer, screenwriter, air policeman (U.S. Air Force)."
}</pre></p>
<p>Weakness: </p>
<p>Enemy: [function]</p>
<p>Interests: [promise]</p>
<ul>
  <li>Chuck Norris counted to infinity. Twice.</li>
  <li>When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.</li>
</ul>
*/
//# sourceMappingURL=index.js.map