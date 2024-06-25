function getDifEnvTestData(fileName,testDataAlias) {
    cy.fixture('testData/'+Cypress.env('appEnv')+'/'+fileName).as(testDataAlias)
}

function getCommonTestData(fileName,testDataAlias) {
    cy.fixture('testData/'+fileName).as(testDataAlias)

}

function getUserTestData(testDataAlias) {
    getCommonTestData('loginUser.json',testDataAlias)
}

function getEncryptUser(testDataAlias) {
    getDifEnvTestData('encryptUser.json',testDataAlias)
}
module.exports= {
    getUserTestData: getUserTestData,
    getEncryptUser:getEncryptUser};