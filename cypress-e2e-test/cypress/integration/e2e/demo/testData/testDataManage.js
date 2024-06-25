function getLoginUserInfo(testDataAlias) {
    cy.fixture('testData/'+Cypress.env('appEnv')+'/loginUser.json').as(testDataAlias)
}
module.exports = {
    getLoginUserInfo:getLoginUserInfo
};