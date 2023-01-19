context("Home", () => {
  it("should render the home page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Get started by editing pages/index.tsx");
  });
});

export {};
