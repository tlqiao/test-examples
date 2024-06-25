describe("assert demo",() => {
    it("assert demo",() => {
        cy.visit("https://angular.realworld.io")
        cy.get('app-layout-header ul li a[href="/login"]').click();
        cy.get('input[type="submit"]').should("be.disable");
        cy.get('input[formcontrolname="email"]').should("be.visible");
        cy.get('input[type="submit"]').should("contain","Sign in");
    })
});