const getDataFromDB= require('./getDataFromDB');
const initDB = require('./initDB');
fixture('get data from database demo');
    test('should login in web successfully',async(t)=> {
        await t.navigateTo("https://angular.realworld.io/");
        await t.click('app-layout-header li a[href="/login"]');
        const password = await getDataFromDB.getLoginUserPassword('e2etest@163.com');
        const userInfo=JSON.parse(JSON.stringify(await getDataFromDB.getLoginUser('e2etest@163.com')));
        await t.typeText('app-auth-page form input[formcontrolname="email"]', userInfo.username);
        await t.typeText('app-auth-page form input[formcontrolname="password"]', password);
        await t.click('app-auth-page button[type="submit"]')
        await initDB.closeConnection();
    });

