describe("mouse action demo",()=> {
    it("should control mouse successfully",()=> {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.get('#developer-name').dblclick();
        cy.get('#developer-name').rightclick();
        cy.get('#developer-name').trigger('mousedown');
        cy.wait(1000);
        cy.get('#developer-name').trigger('mouseleave');
        cy.get('#developer-name').trigger('mouseover');
        cy.get('#developer-name')
            .trigger('mousedown', { which: 1})
            .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
            .trigger('mouseup')
    })
});