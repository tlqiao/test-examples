function getConfig() {
    return Cypress.env('configs')
}
it("show how to manage configuration", () => {
    console.log(JSON.parse(JSON.stringify(getConfig())).dev.baseUrl);
    console.log(JSON.parse(JSON.stringify(getConfig())).dev.mysql.user);
});