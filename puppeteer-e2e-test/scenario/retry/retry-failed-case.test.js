jest.retryTimes(1);
describe("retry case demo", () => {
    it("retry failed case", async () => {
        await page.goto("https://angular.realworld.io/");
        await console.log("open app");
        await page.waitForSelector('app-layout-header li a[href="/login"]');
        await page.click('app-layout-header li a[href="/login"]');
        await console.log("click sign in");
        await page.click('app-layout-header li a[href="/registers"]');
        await console.log("click register");
    });

    it("not retry success case",async() => {
        await page.goto("http://juliemr.github.io/protractor-demo/");
        await page.type('input[ng-model="first"]', '5');
        await page.select('select[ng-model="operator"]','SUBTRACTION');
        await page.type('input[ng-model="second"]',  '3');
        await page.click('#gobutton');
        await console.log("run success case")
    })
});
