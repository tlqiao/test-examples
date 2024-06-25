function openWebApp(){
    cy.visit("http://juliemr.github.io/protractor-demo/");
}

function addNumber(firstNumber,secondNumber){
    cy.get('input[ng-model="first"]').type(firstNumber);
    cy.get('select[ng-model="operator"]').select("ADDITION");
    cy.get('input[ng-model="second"]').clear();
    cy.get('input[ng-model="second"]').type(secondNumber);
    cy.get("#gobutton").click();
}

function shouldCalculationCorrect(expectNumber){
    cy.get('h2').should("contain", "5");
    cy.get("tbody tr").first().find('td').last().should("contain", "5");
}

module.exports={
    openWebApp:openWebApp,
    addNumber:addNumber,
    shouldCalculationCorrect:shouldCalculationCorrect
};