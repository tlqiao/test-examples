describe("type key with keyboard",()=> {
    it("should input key successfully",()=> {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.get('#developer-name').type('{rightarrow}');
        cy.get('#developer-name').type('{leftarrow}');
        cy.get('#developer-name').type('{enter}');
        cy.get('#developer-name').type('{alt}');
        cy.get('#developer-name').type('{shift}{alt}Q');
        cy.get('#developer-name').type('{ctrl}test');
        cy.get('#developer-name').clear()
        cy.get('#developer-name').type('{ctrl}test').type('everything');
        cy.get('#developer-name').type('{shift}',{delay:1,force:true,timeout:5})
    })
});