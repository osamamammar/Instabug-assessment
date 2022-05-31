describe("Test Login Form", () => {
  it(`scenario 1: check wrong email and validate error message`, () => {
    cy.visit("/login");

    cy.get("#email")
      .type("osamaammar29@gmail.com")
      .should("have.value", "osamaammar29@gmail.com");

    cy.get("#password").type("Osos123456").should("have.value", "Osos123456");

    cy.get(".button-login").click();

    cy.get(".message-container").should(
      "contain",
      "Your email and/or password are incorrect"
    );
  });

  it(`scenario 2: check wrong password and validate error message`, () => {
    cy.visit("/login");

    cy.get("#email")
      .type("mohamed@instabug.com")
      .should("have.value", "mohamed@instabug.com");

    cy.get("#password").type("Osos123456").should("have.value", "Osos123456");

    cy.get(".button-login").click();

    cy.get(".message-container").should(
      "contain",
      "Your email and/or password are incorrect"
    );
  });

  it(`scenario 3: check right email, password and validate redirect to welcome page`, () => {
    cy.visit("/login");

    cy.get("#email")
      .type("mohamed@instabug.com")
      .should("have.value", "mohamed@instabug.com");

    cy.get("#password").type("A12345678").should("have.value", "A12345678");

    cy.get(".button-login").click();

    cy.url().should("include", "/welcome");
  });

  it(`scenario 4: Enter not valid email, un-focus, validate red message will appear and input border will be red`, () => {
    cy.visit("/login");

    cy.get("#email").type("dddd").should("have.value", "dddd").blur();

    cy.get(".error-message").should("contain", "Enter a valid email address");
    cy.get("#email").should("have.css", "border-color", "rgb(244, 67, 54)");
  });
});
