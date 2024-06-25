const getDataFromDB= require('./getDataFromDB');
const initdb = require('./init-db');
describe('get data from database demo',()=> {
    it('should login in web successfully',async()=> {
        await page.goto("https://angular.realworld.io/");
        await expect(page).toClick('app-layout-header li a[href="/login"]');
        const password = await getDataFromDB.getLoginUserPassword('e2etest@163.com');
        const userInfo=JSON.parse(JSON.stringify(await getDataFromDB.getLoginUser('e2etest@163.com')));
        await expect(page).toFill('app-auth-page form input[formcontrolname="email"]',userInfo.username);
        await expect(page).toFill('app-auth-page form input[formcontrolname="password"]',password)

    })
    afterEach(async ()=> {
         await initdb.closeConnection();
    })
});