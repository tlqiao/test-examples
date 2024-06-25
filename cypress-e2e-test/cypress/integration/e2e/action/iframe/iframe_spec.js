describe("control iframe", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    it("should access element in iframe successfully", ()=> {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_file");
        getIframeBody('iframe[name="iframeResult"]').find('h1').should('contain','Show File-select Fields');
        getIframeBody('iframe[name="iframeResult"]').find('input[type="submit"]').first().click();
        cy.wait(3000);
    })
});

const getIframeDocument = (iframeSelector) => {
    return cy
        .get(iframeSelector)
        .its('0.contentDocument').should('exist')
};

const getIframeBody = (iframeSelector) => {
    return getIframeDocument(iframeSelector)
        .its('body').should('not.be.empty')
        .then(cy.wrap)
};