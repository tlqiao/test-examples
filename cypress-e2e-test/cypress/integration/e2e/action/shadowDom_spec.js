describe("shadow dom demo", () => {
    it("should control dom in shadow successfully", () => {
        cy.visit("https://radogado.github.io/shadow-dom-demo/");
        cy.shadowGet('#app')
            .shadowFind('p')
            .its('length')
            .should('eq', 1);
        cy.shadowGet('#app')
            .shadowFind('p')
            .shadowContains('Dynamically generated content');
        cy.shadowGet('#app')
            .shadowFind('p')
            .shadowClick()
    })
});