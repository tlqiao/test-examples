it('should control element in iframe with command',()=> {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_file");
    cy.getIframe('iframe[name="iframeResult"]').find('h1').should('contain','Show File-select Fields');
    cy.getIframe('iframe[name="iframeResult"]').find('input[type="submit"]').first().click();
    cy.wait(3000);
});