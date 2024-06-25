describe("hover demo", () => {
    it("should click successfully", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('https://chercher.tech/practice/popups');
        cy.get('a[href="https://google.com"]').click({force: true})
    })
    it.only("should hover successfully", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('https://chercher.tech/practice/popups');
        cy.get('#sub-menu').focus();
        ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
            cy.get('#sub-menu').trigger(`${event}`)
        });
        cy.wait(3000);
        cy.get('a[href="https://google.com"]').click()
    });
});