async function login(t) {
    await t.navigateTo("https://angular.realworld.io/");
    await t.click('app-layout-header li a[href="/login"]');
    await t.typeText('app-auth-page form input[formcontrolname="email"]', 'e2etest@163.com');
    await t.typeText('app-auth-page form input[formcontrolname="password"]', '12345678');
    await t.click('app-auth-page button[type="submit"]');
}

module.exports={
    login:login
};