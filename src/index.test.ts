import html from "./index";

describe("html-literal", () => {
  it("should work as intended", async () => {
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

    expect(output).toMatchSnapshot();
  });
});
