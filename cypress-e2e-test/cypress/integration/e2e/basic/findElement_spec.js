describe("query element demo", () => {
    it("query element test", () => {
        cy.visit("https://angular.realworld.io");
        cy.get('app-layout-header ul li a[href="/login"]').click();
        cy.get('app-layout-header ul li>a[href="/login"]').click();
        cy.get('app-layout-header a[href="/login"]').click();
        cy.get('app-layout-header .nav-item a[href="/login"]').click();
        cy.get('[href="/login"]').click();
        cy.contains("Sign in").click();
        cy.get('app-layout-header').find('li a[href="/login"]').click();
        cy.get('app-layout-header li').children('a[href="/login"]').click();
        cy.get('a[href="/login"]').parent('li').should("have.class", "nav-item");
        cy.get('app-layout-header li a').eq(1).click();
        cy.get('app-layout-header li a').first().click();
        cy.get('app-layout-header li a').last().click();
        cy.get('app-layout-header li a').first().should("have.attr","routerlink");
    })
});