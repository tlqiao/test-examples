// -- This is a parent command --
import 'cypress-file-upload';
import 'cypress-shadow-dom';
Cypress.Commands.add("login", (email, password) => {
    return cy.request({
        url: "https://conduit.productionready.io/api/users/login",
        method: "POST",
        body: {
            "user": {
                "email": email,
                "password": password
            }
        }
    }).then(response => {
        return response.body.user.token
    })
});

Cypress.Commands.add('getIframe',(iframeSelector)=> {
    return cy
        .get(iframeSelector)
        .its('0.contentDocument').should('exist')
        .its('body').should('not.be.empty')
        .then(cy.wrap)
});

Cypress.Commands.add('dragElement',(sourceElementSelector,targetElementSelector)=> {
    cy.get(targetElementSelector)
        .then($el => {
            const {top, left, bottom, right} = $el[0].getBoundingClientRect();
            let targetX = (left + right) / 2;
            let targetY = (top + bottom) / 2;
            console.log(targetX);
            console.log(targetY);
            cy.get(sourceElementSelector)
                .trigger('mousedown', {which: 1})
                .trigger('mousemove', {
                    which: 1,
                    pageX: targetX,
                    pageY: targetY
                })
                .trigger('mouseup', {force: true});
        })
});

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
