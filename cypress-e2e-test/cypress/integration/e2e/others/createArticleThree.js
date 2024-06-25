function createArticleWithLoginCommand() {
    cy.login('e2etest@163.com','12345678').then(token => {
        cy.request({
            method: 'POST',
            url: 'https://conduit.productionready.io/api/articles/',
            headers: {
                'authorization': 'Token '+token
            },
            body: {
                "article": {
                    "tagList": [],
                    "title": "testTitle",
                    "description": "test",
                    "body": "test"
                }
            }
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    })
}
createArticleWithLoginCommand();
