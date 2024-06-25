async function openApp() {
    await page.goto("https://angular.realworld.io/");
}

async function gotoSign() {
    await page.waitForSelector('app-layout-header li a[href="/login"]');
    await page.click('app-layout-header li a[href="/login"]');
}

module.exports ={
    openApp : openApp,
    gotoSign : gotoSign
};