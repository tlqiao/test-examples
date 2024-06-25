function getToken() {
   return cy.request({
        url: "https://conduit.productionready.io/api/users/login",
        method: "POST",
        body: {
            "user": {
                "email": "e2etest@163.com",
                "password": "12345678"
            }
        }
    }).then(response => {
        return response.body.user.token
})
}
function createArticleOne() {
    getToken().then(token => {
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

module.exports = {
    createArticleOne:createArticleOne
};