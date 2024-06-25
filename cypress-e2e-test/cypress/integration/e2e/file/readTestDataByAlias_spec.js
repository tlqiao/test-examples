it("read test data in json file with readFile function", () => {
        cy.readFile('cypress/fixtures/testData/loginUser.json').as('users');
        cy.get('@users').then((data) => {
            console.log(data);
            console.log('the username is: ' + data.regular.name);
        })
    }
);
it("read test data in json file with fixture function", () => {
    cy.fixture('testData/loginUser.json').as('usersTwo');
    cy.get('@usersTwo').then((data) => {
        console.log(data);
        console.log('the username is: ' + data.regular.name);
    })
});