describe("multiple tab demo", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    it("should remove target attribute successfully",()=> {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_a_target");
        cy.getIframe('iframe[name="iframeResult"]').find('p a[href="https://www.w3schools.com"]')
            .invoke('removeAttr', 'target').click();
        cy.wait(2000);
        cy.getIframe('iframe[name="iframeResult"]').find('a').contains('Try it Yourself').first().click();

    })
});