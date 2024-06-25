describe("querySelector demo ", () => {
    it.skip("use parentNode to find element", async () => {
        await page.goto('https://angular.realworld.io/');
        await expect(page).toClick('app-layout-header li a[href="/login"]');
        await expect(page).toFill('app-auth-page form input[formcontrolname="email"]', 'e2etest@163.com');
        await expect(page).toFill('app-auth-page form input[formcontrolname="password"]', '12345678');
        await expect(page).toClick('app-auth-page button[type="submit"]');
        await expect(page).toClick('app-home-page li a', {text: /.*Global Feed.*/});
        await page.waitForSelector('app-article-meta a[href="/profile/e2etest"]');
        await page.evaluate(() => {
            document.querySelector('app-article-meta a[href="/profile/e2etest"]').parentElement.querySelector('button').click();
        });
    });

    it("filter element with document querySelector", async () => {
        await page.goto('https://angular.realworld.io/');
        await page.waitForSelector('app-layout-header li a[href="/login"]');
        await page.evaluate(() => {
            Array.from(document.querySelectorAll('app-layout-header li a')).filter(item => item.innerText == 'Sign in')[0].click()
        });
    });

    it("get childElement with document querySelector", async () => {
        await page.goto('https://angular.realworld.io/');
        await page.waitForSelector('app-layout-header li a[href="/login"]');
        await page.evaluate(() => {
            document.querySelector('app-layout-header ul').firstElementChild.querySelector('li a').click();
            document.querySelector('app-layout-header ul').lastElementChild.querySelector('li a').click();
        })
    })
});