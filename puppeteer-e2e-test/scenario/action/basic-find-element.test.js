describe("select and control element", () => {
    it('should type text successfully', async() => {
        await page.goto('http://juliemr.github.io/protractor-demo/');
        const elementHandler = await page.$('input[ng-model="first"]');
        await elementHandler.type('5');
        await page.type('input[ng-model="second"]',  '3');
    });

    it.skip('should add numbers correctly way', async () => {
        await page.goto('http://juliemr.github.io/protractor-demo/');
        await page.type('input[ng-model="first"]', '5');
        await page.select('select[ng-model="operator"]','SUBTRACTION');
        await page.type('input[ng-model="second"]',  '3');
        await page.click('#gobutton');
        await page.waitForSelector('h2',{timeout: 3000});
        expect(await page.$eval('h2', el => el.innerText)).toContain('2');
        let value = await page.$eval('tbody tr:nth-child(1) td:nth-child(3)',el=> {return el.innerText});
        expect(value).toContain('2');
    });

    it("should add numbers correctly with auto-wait", async()=> {
        await page.goto('http://juliemr.github.io/protractor-demo/');
        await expect(page).toFill('input[ng-model="first"]','5');
        await expect(page).toSelect('select[ng-model="operator"]','SUBTRACTION');
        await expect(page).toFill('input[ng-model="second"]',  '3');
        await expect(page).toClick('#gobutton');
        await expect(page).toMatchElement('h2',{text:'2'});
        await expect(page).toMatchElement('tbody tr:nth-child(1) td:nth-child(3)',{text:'2'});
        await expect(page).toFill('input[ng-model="first"]','2');
        await expect(page).toSelect('select[ng-model="operator"]','MULTIPLICATION');
        await expect(page).toFill('input[ng-model="second"]','3');
        await expect(page).toClick('#gobutton');
        await expect(page).toMatchElement('h2',{text:'6'});
        await expect(page).toMatchElement('tbody tr:nth-child(1) td:nth-child(3)',{text:'6'});
    });

    it("use puppeteer-expect under elementHandle", async() => {
        await page.goto('http://juliemr.github.io/protractor-demo/');

        //find parent element
        const elementHandle = await page.$('.container.ng-scope');
        //find element base on parent element
        await expect(elementHandle).toFill('input[ng-model="first"]','55');
    });
});