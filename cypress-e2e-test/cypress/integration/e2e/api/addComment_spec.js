const createArticleOne= require('./createArticleOne');
describe("add comment for a article",()=> {
    it('should add comment for a article successfully', () => {
        cy.visit("https://angular.realworld.io");
        cy.get('app-layout-header ul li a[href="/login"]').click();
        cy.get('[formcontrolname=email]').type("e2etest@163.com");
        cy.get('[formcontrolname=password]').type("12345678");
        cy.get('app-auth-page button[type="submit"]').click();
        createArticleOne.createArticleOne();
        cy.get('app-home-page li a').contains('Global Feed').click();
        cy.get('app-article-list app-article-preview a h1').contains('testTitle').first().click();
        cy.get('app-article-page form fieldset textarea').type('my comment');
        cy.get('app-article-page button').contains('Post Comment').click();
        cy.get('app-article-page app-article-comment .card-text').first().should('contain','my comment');
    });
});