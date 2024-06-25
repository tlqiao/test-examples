describe("visit different domain page", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    it("can't visit different domain page", () => {
        cy.visit("https://freshdesignweb.com/jquery-html5-file-upload/");
        cy.get('a[href="https://codepen.io/bi11johnston/pen/bsGDf"]')
            .invoke('removeAttr', 'target').click();
        cy.get('a[href="https://codepen.io/bi11johnston/pen/bsGDf"]').click();
    });

    it("can't visit diff domain url page", () => {
        cy.visit("http://www.lorenzostanco.com/lab/demos/CrossDomainFragment/Demo.html");
        cy.get('p a').first().click();
    })
});