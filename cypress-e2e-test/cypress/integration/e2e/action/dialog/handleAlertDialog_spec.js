describe("handle dialog demo", () => {

    it("should cypress confirm alert dialog successfully", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/");
        cy.get('#populate').click();
    });

    it("should change alert dialog behavior successfully", () => {
        cy.on('window:confirm', (str) => {
            if (expect(str).to.eq('Reset information before proceeding?')) {
                return false
            } else {
                return true
            }
        });
        cy.visit("https://devexpress.github.io/testcafe/example/");
        cy.get('#populate').click();
    });

    it("should handle dialog successfully",()=> {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit("https://chercher.tech/practice/popups");
        cy.get('input[name="alert"]').click();
        cy.get('input[name="confirmation"]').click();
    })
});