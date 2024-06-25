const puppeteer = require('puppeteer');
describe("use puppeteer to get  browser and page object demo ", ()=> {
    it("use more launch properties demo", async () => {
        const browser = await puppeteer.launch({slowMo: '500', headless: false,
            executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
        const page = await browser.newPage();
        await page.setViewport({width: 1920, height: 1080});
        await page.goto("https://angular.realworld.io/");
        await page.waitForSelector('app-layout-header li a[href="/login"]');
        await page.click('app-layout-header li a[href="/login"]');
        await page.close();
        await browser.close();
        // more details about launch options please view
        // https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#puppeteerconnectoptions
    });
});