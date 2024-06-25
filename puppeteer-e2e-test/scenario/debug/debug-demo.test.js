const puppeteer = require('puppeteer');
const demo = async ()=>{
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();
    await page.goto("https://angular.realworld.io/");
    await page.waitForSelector('app-layout-header li a[href="/login"]');
    await page.click('app-layout-header li a[href="/login"]');
    await page.click('app-layout-header li a[href="/register"]');
    const value = await page.$eval('app-layout-header li a[href="/login"]',el=> {return el.innerText});
    await console.log("this value is "+value);
    await page.close();
    await browser.close();
};
demo();