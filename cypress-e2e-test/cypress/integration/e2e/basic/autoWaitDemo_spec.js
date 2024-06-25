const calculationPage= require('./page/calculationPage');
describe("calculate test", () => {
    it("should add correctly", () => {
       calculationPage.openWebApp();
       calculationPage.addNumber(2,3);
       calculationPage.shouldCalculationCorrect(5);
    });
});