describe("retry step demo", () => {
    it("should retry step successfully", async () => {
        await page.goto('http://juliemr.github.io/protractor-demo/');
        await page.type('input[ng-model="first"]', '5');
        await page.select('select[ng-model="operator"]', 'SUBTRACTION');
        await page.type('input[ng-model="second"]', '3');
        await page.click('#gobutton');
        let i = 0;
        while (i < 3) {
            if (page.$eval('h2', el => {return el.innerText}) == 2) {
                await expect(page.$eval('h2', el => {return el.innerText})).toEqual('2')
            }
            i = i + 1;
            console.log("retry times" + i - 1)
        }
    });
});

it.only("retry again", async () => {
    await page.goto('http://juliemr.github.io/protractor-demo/');
    await page.type('input[ng-model="first"]', '5');
    await page.select('select[ng-model="operator"]', 'SUBTRACTION');
    await page.type('input[ng-model="second"]', '3');
    await page.click('#gobutton');
    let i = 0;
    while (i < 3) {
        await page.$("table tbody").then(element => {
                if (element.$("tr td").length > 0) {
                    console.log("the table content present")
                } else {
                    console.log("the table content does not present")
                }
            }
        );
        await page.waitFor(1000);
        i=i+1
    }
});