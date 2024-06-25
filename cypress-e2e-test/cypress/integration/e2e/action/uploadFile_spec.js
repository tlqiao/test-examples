describe("upload file demo", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    it("should upload file successfully", () => {
        cy.visit("https://chercher.tech/practice/popups");
        cy.get('input[type="file"]').attachFile('testData/dev/loginUser.json');
        cy.wait(3000);
        cy.visit("https://chercher.tech/practice/popups");
        cy.get('input[type="file"]')
            .attachFile('testData/dev/loginUser.json')
            .attachFile('profile.json', {force: true, encoding: 'utf-8'});
        cy.wait(3000)
    });
});