function login (username,password) {
    cy.server();
    cy.route('POST','/api/oauth/token').as('getToken');
    cy.visit('loginUrl');
    cy.get('[formcontrolname=username]').clear();
    cy.get('[formcontrolname=username]').type(username);
    cy.get('[formcontrolname=password]').clear();
    cy.get('[formcontrolname=password]').type(password);
    cy.get('#submit').click();
    cy.wait('@getToken').then(function (xhr) {
        if(xhr.status == 400 || 401) {
            cy.get('#submit').click()
        }
    })
}

function fillProductAndOrder(productName,order) {
    cy.get('#product').type('{leftarrow}');
    cy.get('#product').clear().type(productName);
    cy.get('#order').type('{leftarrow}');
    cy.get('#order').clear().type(order);
    cy.get('#order').type('{enter}');
    cy.get('app-order-app').then(($orderApp)=> {
        if($orderApp.find('.help-block').length>0){
            cy.get('.help-block').then(($helpBlocker)=> {
                if($helpBlocker.text.includes('订单不存在'))
                cy.get('#order').type('{leftarrow}')
                cy.get('#order').clear().type(order)
                cy.get('#order').type('{enter}')
            })
        }
    })
}