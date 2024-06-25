describe("login demo", () => {
    it("login test", () => {
        cy.visit("https://angular.realworld.io");
        cy.get('app-layout-header ul li a[href="/login"]').click();
        cy.get('[formcontrolname=email]').type("e2etest@163.com");
        cy.get('[formcontrolname=password]').type("12345678");
        cy.get('app-auth-page button[type="submit"]').click();
    })
});