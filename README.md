# HTML Tagged Template Literal

[![Travis](https://img.shields.io/travis/kallaspriit/html-literal.svg)](https://travis-ci.org/kallaspriit/html-literal)
[![Coverage](https://img.shields.io/coveralls/kallaspriit/html-literal.svg)](https://coveralls.io/github/kallaspriit/html-literal)
[![Downloads](https://img.shields.io/npm/dm/html-literal.svg)](http://npm-stat.com/charts.html?package=html-literal)
[![Version](https://img.shields.io/npm/v/html-literal.svg)](http://npm.im/html-literal)
[![License](https://img.shields.io/npm/l/html-literal.svg)](http://opensource.org/licenses/MIT)

**Tagged template literal for authoring HTML in JavaScript.**

Useful for writing HTML as simple template tag literals that provide syntax highlighting (through lit-html extension) and some convenience (no need to manually join arrays, JSON-encode objects etc).

- Provides syntax highlighting with VSCode [lit-html extension](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html).
- Handles promises, arrays, functions and objects.
- Arrays get automatically joined.
- Objects get automatically displayed as formatted json.
- Works with circular data structures.
- Written in TypeScript, no need for extra typings.
- 100% test coverage.

## Installation

This package is distributed via npm

```cmd
npm install html-literal
```
```cmd
yarn add html-literal
```

## Example

```typescript
import html from "../src";

const info = {
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
  enemy: () => "none",
  getInterests: () => Promise.resolve(),
};

const output = html`
  <h1>HTML Tagged Template Literal</h1>
  <p>Name: ${info.name}</p>
  <p>Age: ${info.age}</p>
  <p>Details: <pre>${info.details}</pre></p>
  <p>Weakness: ${info.weakness}</p>
  <p>Enemy: ${info.enemy}</p>
  <p>Interests: ${info.getInterests()}</p>
  <ul>
    ${info.jokes.map(
      joke =>
        html`
          <li>${joke}</li>
        `,
    )}
  </ul>
`;

console.log(output);

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
```

## Commands

- `yarn start` to start the example application.
- `yarn build` to build the production version.
- `yarn test` to run tests.
- `yarn coverage` to gather code coverage.
- `yarn lint` to lint the codebase.
- `yarn prettier` to run prettier.
- `yarn validate` to run all pre-commit checks (prettier, build, lint, test)