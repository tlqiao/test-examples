const dialogPage = require('./page/dialogPage');
fixture('handel dialog test');
    test("should handle dialog successfully", async(t)=> {
       await  t.navigateTo("https://chercher.tech/practice/popups");
       await dialogPage.clickPromote(t);
       await dialogPage.clickConfirm(t);
       await dialogPage.clickAlert(t);
       await t.click('#double-click');
    });