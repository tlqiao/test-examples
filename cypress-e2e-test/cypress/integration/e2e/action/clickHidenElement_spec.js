describe("control hidden element demo",()=> {
    it("should click hidden element successfully", () => {
        cy.visit("https://www.jquery-az.com/css/demo.php?ex=123.0_4#");
        cy.get('p a').contains('Hide Menu').click();
        cy.get('li a').contains('Home').click({force:true});
        cy.get('li a').contains('Contact').invoke('show').click();
        cy.get('li a').contains('Contact').click();
    })
});