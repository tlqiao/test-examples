const configManage=require('../../../config/configManage');
const csvToJson = require('csvtojson');
async function login(t,username, password) {
    await t.navigateTo(configManage.getConfigs().appBaseUrl);
    await t.click('app-layout-header li a[href="/login"]');
    await t.typeText('app-auth-page form input[formcontrolname="email"]', username);
    await t.typeText('app-auth-page form input[formcontrolname="password"]', password);
    await t.click('app-auth-page button[type="submit"]')
}
async function loginWithUserData(t){
    const userFilePath='./e2e/scenario/demo/testdata/dataFile/'+configManage.getConfigs().env+'/userInfo.csv';
    const data = await csvToJson().fromFile(userFilePath);
    await login(t,data[0].username,data[0].password);
}
module.exports={
    loginWithUserData:loginWithUserData
};