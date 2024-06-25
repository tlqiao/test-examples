describe("calculate test", () => {
    it("calculate test", () => {
    cy.visit("http://juliemr.github.io/protractor-demo/");
    cy.get('input[ng-model="first"]').clear();
        cy.get('input[ng-model="first"]').type("2");
        cy.get('select[ng-model="operator"]').select("ADDITION");
        cy.get('input[ng-model="second"]').clear();
        cy.get('input[ng-model="second"]').type("3");
        cy.get("#gobutton").click();
        cy.get('h2').should("contain","5");
        cy.get("tbody tr").first().find('td').last().should("contain","5");

        cy.get('input[ng-model="first"]').type("3");
        cy.get('select[ng-model="operator"]').select("SUBTRACTION");
        cy.get('input[ng-model="second"]').type("4");
        cy.get("#gobutton").click();
        cy.get('h2').should("contain","-1");
        cy.get("tbody tr").first().find('td').last().should("contain","-1");

        cy.get('input[ng-model="first"]').type("3");
        cy.get('select[ng-model="operator"]').select("MULTIPLICATION");
        cy.get('input[ng-model="second"]').type("5");
        cy.get("#gobutton").click();
        cy.get('h2').should("contain","15");
        cy.get("tbody tr").first().find('td').last().should("contain","15");

        cy.get('input[ng-model="first"]').type("25");
        cy.get('select[ng-model="operator"]').select("DIVISION");
        cy.get('input[ng-model="second"]').type("5");
        cy.get("#gobutton").click();
        cy.get('h2').should("contain","5");
        cy.get("tbody tr").first().find('td').last().should("contain","5");

        cy.get('input[ng-model="first"]').type("25");
        cy.get('select[ng-model="operator"]').select("MODULO");
        cy.get('input[ng-model="second"]').type("6");
        cy.get("#gobutton").click();
        cy.get('h2').should("contain","1");
        cy.get("tbody tr").first().find('td').last().should("contain","1");

    })
});