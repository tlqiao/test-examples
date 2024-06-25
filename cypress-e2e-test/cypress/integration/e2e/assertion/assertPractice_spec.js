describe("practice assert element content",() => {
    it("assert it",() => {
        cy.visit("https://angular.realworld.io");
        cy.get('app-layout-header ul li a').eq(0).should('contain','Home');
        cy.get('app-layout-header ul li a').eq(1).should('contain','Sign in');
        cy.get('app-layout-header ul li a').eq(2).should('contain','Sign up');
        cy.get('app-layout-header ul li a[href="/login"]').click();
        cy.get('[formcontrolname=email]').clear()
        cy.get('[formcontrolname=email]').type("e2etest@163.com");
        cy.get('[formcontrolname=password]').clear();
        cy.get('[formcontrolname=password]').type("12345678");
        cy.get('app-auth-page button[type="submit"]').click();
        cy.get('app-layout-header ul li a').should('have.length', 4);
        cy.get('app-layout-header ul li a').eq(0).should('contain','Home');
        cy.get('app-layout-header ul li a').eq(1).should('contain','New Article');
        cy.get('app-layout-header ul li a').eq(2).should('contain','Settings');
        cy.get('app-layout-header ul li a').eq(3).should('contain','e2etest');
        cy.get('app-home-page li a').contains('Your Feed').should('have.class','active');
        cy.get('app-layout-header ul li a').contains('Sign in').should('not.exist');
        cy.get('app-layout-header ul li a').contains('Sign up').should('not.exist');
        cy.get('app-layout-header ul li a').contains('Settings').click();
        cy.get('app-settings-page h1').should('contain','Your Settings');
        cy.get('app-settings-page button[class="btn btn-outline-danger"]').click();
        cy.get('app-home-page li a').contains('Global Feed').should('have.class','active');
        cy.get('app-layout-header ul li a').should('have.length', 3);
        cy.get('app-layout-header ul li a').contains('Home').should('exist');
        cy.get('app-layout-header ul li a').contains('Sign in').should('exist');
        cy.get('app-layout-header ul li a').contains('Sign up').should('exist');
    })
});