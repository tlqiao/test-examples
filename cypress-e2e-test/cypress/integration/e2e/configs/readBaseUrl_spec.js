function getBaseUrl() {
   return Cypress.env('baseUrl')[Cypress.env('appEnv')||'dev']
}
it("show how to manage configuration", () => {
   console.log("this baseUrl is " + getBaseUrl())
   cy.visit(getBaseUrl())
});