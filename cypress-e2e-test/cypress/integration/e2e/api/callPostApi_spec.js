it("call create article api demo", () => {
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/articles/',
        body: {
            "article": {
                "tagList": [],
                "title": "testTitle",
                "description": "test",
                "body": "test"
            }
        }
    }).then(response => {
        expect(response.status).to.eq(200)
    })
});

it("call create article api demo2", () => {
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/articles/',
        headers: {
            'authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDMzMDksInVzZXJuYW1lIjoiZTJldGVzdCIsImV4cCI6MTU4MjI2ODU1MX0.t-ny2o9fuJxbbLeTDHm0YOaOci4otYM3hi32gQMB0VA'
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
        expect(response.status).to.eq(200)
    })
});