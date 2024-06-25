const configManage=require('../../../config/configManage');
const csvToJson = require('csvtojson');
async function login(username, password) {
    await page.goto(configManage.getConfigs().appBaseUrl);
    await expect(page).toClick('app-layout-header li a[href="/login"]');
    await expect(page).toFill('app-auth-page form input[formcontrolname="email"]',username);
    await expect(page).toFill('app-auth-page form input[formcontrolname="password"]',password);
    await expect(page).toClick('app-auth-page button[type="submit"]');
}
async function loginWithUserData(){
    const userFilePath='./scenario/example/testdata/dataFile/'+configManage.getConfigs().env+'/userInfo.csv';
    const data = await csvToJson().fromFile(userFilePath);
    await login(data[0].username,data[0].password);
}
module.exports={
    loginWithUserData:loginWithUserData
};