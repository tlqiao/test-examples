describe("multiple tab demo", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    it("should check href and target attribute successfully", () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_a_target",{failOnStatusCode:true});
        cy.getIframe('iframe[name="iframeResult"]').find('p a')
            .should('have.attr', 'target')
            .and('include', '_blank')
    })
});