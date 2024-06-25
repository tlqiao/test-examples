function getConfig() {
    return Cypress.env('configs')
}
function getBaseUrl() {
    return (JSON.parse(JSON.stringify(getConfig())).dev.baseUrl)
}

module.exports={
    getBaseUrl:getBaseUrl
}