describe("multiple tab demo",()=> {
    it("should check body successfully",()=> {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_a_target");
        cy.getIframe('iframe[name="iframeResult"]').find('p a[href="https://www.w3schools.com"]')
            .then($el => {
                const href = $el.prop("href");
                cy.request(href)
                    .its('body')
                    .should('include' ,'<h3>HTML Example:</h3>')
            })
    })
});