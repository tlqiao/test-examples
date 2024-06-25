const menuPage = require('./page/menuPage');
const loginPage = require('./page/loginPage');
describe("page object demo with jest-puppeteer",  () => {
    it("should login in successfully", async () => {
        await menuPage.openApp();
        await menuPage.gotoSign();
        await loginPage.login('e2etest@163.com','12345678');
    });
});