describe("call api demo", () => {
    it("call get method api demo", () => {
        cy.request('GET', 'https://conduit.productionready.io/api/articles?limit=10&offset=0')
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    });

    it("call get method api demo2", () => {
        cy.request({
            method: 'GET',
            url: 'https://conduit.productionready.io/api/articles/'
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    });
});
