describe('drag element demo', () => {
    it('should drag element successfully', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.get('#tried-test-cafe').click();
        cy.dragElement('.slider-container #slider span','.slider-value:nth-child(3)')
    });
})