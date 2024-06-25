const secret = require('./secret');
const configManage=require('./configManagePage');
const testDataManage = require('../file/manageTestData');
it('should login successfully', () => {
    testDataManage.getEncryptUser('encryptUsers');
    cy.visit(configManage.getBaseUrl());
    cy.get('app-layout-header ul li a[href="/login"]').click();
    cy.get('@encryptUsers').then((data) => {
        cy.get('[formcontrolname=email]').type(data.regular.name);
        cy.get('[formcontrolname=password]').type(secret.decrypt(data.regular.password));
    });
    cy.get('app-auth-page button[type="submit"]').click();
});