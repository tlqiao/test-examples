const manageTestDta = require('./manageTestData');
describe("login demo",()=> {
    it('should login failed', () => {
        cy.visit("https://angular.realworld.io");
        cy.get('app-layout-header ul li a[href="/login"]').click();
        manageTestDta.getUserTestData('users');
        cy.get('@users').then((data) => {
            cy.get('[formcontrolname=email]').type(data.manager.name);
            cy.get('[formcontrolname=password]').type(data.manager.password);
        });
        cy.get('app-auth-page button[type="submit"]').click();
    })
})
