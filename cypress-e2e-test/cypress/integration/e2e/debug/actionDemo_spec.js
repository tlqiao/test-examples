describe("control element demo", () => {
    it("query by css selector", () => {
        cy.visit("https://angular.realworld.io");
        cy.get('app-layout-header ul li a[href="/login"]').click();
        cy.get('input[formcontrolname="email"]').clear();
        cy.get('input[formcontrolname="email"]').type("e2etest@163.com");
        cy.get('button[type="submit"]').click({force:true});
        cy.get('input[formcontrolname="password"]').clear();
        cy.get('input[formcontrolname="password"]').type("12345678");
        cy.get('button[type="submit"]').click();
    })
});