// cypress/integration/example_spec.js
describe("My First Test", () => {
  it("Visits the app and asserts the content", () => {
    // Visit the app
    cy.visit("/"); // Use the relative path based on your baseUrl

    // Assert the content
    cy.contains("Hello, React!").should("exist");
  });
});
