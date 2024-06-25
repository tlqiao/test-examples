async function login(username, password) {
    await page.waitForSelector('app-auth-page form input[formcontrolname="email"]');
    await page.type('app-auth-page form input[formcontrolname="email"]',username);
    await page.waitForSelector('app-auth-page form input[formcontrolname="password"]');
    await page.type('app-auth-page form input[formcontrolname="password"]',password);
    await page.click('app-auth-page button[type="submit"]');
}
module.exports={
    login:login
};