describe("calculate test", () => {
    it("should add correctly", () => {
        cy.visit("http://juliemr.github.io/protractor-demo/");
        cy.get('input[ng-model="first"]').type(3);
        cy.get('select[ng-model="operator"]').select("ADDITIONSS");
        cy.get('input[ng-model="second"]').clear();
        cy.get('input[ng-model="second"]').type(4);
        cy.get("#gobutton").click();
    });
});