const secret = require('./secret');
const configManage = require('../config/configManage');
const testDataManage = require('../testData/testDataManage');
function getToken(email,password) {
    return cy.request({
        url: configManage.getApiBaseUrl()+'/api/users/login',
        method: "POST",
        body: {
            "user": {
                "email": email,
                "password": secret.decrypt(password)
            }
        }
    }).then(response => {
        return response.body.user.token
    })
}

function loginWithRegularUser() {
    cy.visit(configManage.getBaseUrl());
    cy.get('app-layout-header ul li a[href="/login"]').click();
    testDataManage.getLoginUserInfo('loginUser');
    cy.get('@loginUser').then((data)=> {
        cy.get('[formcontrolname=email]').type(data.regular.email);
        cy.get('[formcontrolname=password]').type(secret.decrypt(data.regular.password));

    });
    cy.get('app-auth-page button[type="submit"]').click();
}

function getRandomNum(Min,Max)
{
    let Range = Max - Min;
    let Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
module.exports = {
    getToken:getToken,
    loginWithRegularUser:loginWithRegularUser,
    getRandomNum: getRandomNum
};
