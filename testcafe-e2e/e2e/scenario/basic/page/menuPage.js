import config from '../config'
async function login (t) {
   await t.navigateTo(config.baseUrl)
   await t.click('app-layout-header li a[href="/login"]')
   await t.typeText('app-auth-page form input[formcontrolname="email"]',config.userName)
   await t.typeText('app-auth-page form input[formcontrolname="password"]',config.password)
   await t.click('app-auth-page button[type="submit"]')
}

async function goToNewArticle(t) {
    await t.click('app-layout-header li a[href="/editor"]')

}

async function goToSetting(t) {
    await t.click('app-layout-header li a[href="/settings"]')
}

module.exports ={
   login: login,
   goToNewArticle: goToNewArticle,
   goToSetting: goToSetting
}