const puppeteer = require('puppeteer');
describe("use puppeteer to get  browser and page object demo ", ()=> {
    it("should open a page with puppeteer", async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://angular.realworld.io/");
        await page.waitForSelector('app-layout-header li a[href="/login"]');
        await page.click('app-layout-header li a[href="/login"]');
        await page.close();
        await browser.close();
    });
});