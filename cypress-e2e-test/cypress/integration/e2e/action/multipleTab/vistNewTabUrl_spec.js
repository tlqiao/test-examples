describe("multiple tab demo", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    it("should visit new tab url successfully",()=> {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_a_target");
        cy.getIframe('iframe[name="iframeResult"]').find('p a[href="https://www.w3schools.com"]')
            .should('have.attr', 'target')
            .and('include', '_blank');
        cy.visit('https://www.w3schools.com');
        cy.get('a').contains('Try it Yourself').first().click();

    })});