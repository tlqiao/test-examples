describe('drag element demo', () => {
    it('should drag element successfully', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.get('#tried-test-cafe').click();
        moveToTargetElement()
    });

    function moveToTargetElement() {
        cy.get('.slider-value:nth-child(2)')
            .then($el => {
                const {top, left, bottom, right} = $el[0].getBoundingClientRect();
                let targetX = (left + right) / 2;
                let targetY = (top + bottom) / 2;
                console.log(targetX);
                console.log(targetY);
                cy.get('.slider-container #slider span')
                    .trigger('mousedown', {which: 1})
                    .trigger('mousemove', {
                        which: 1,
                        pageX: targetX,
                        pageY: targetY
                    })
                    .trigger('mouseup', {force: true});
            })
    }
});