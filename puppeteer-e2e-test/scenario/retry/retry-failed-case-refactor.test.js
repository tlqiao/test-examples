jest.retryTimes(1);
describe("retry case demo", () => {
    afterEach(async() => {
        await expect(page).toClick('app-layout-header li a[href="/settings"]');
        await expect(page).toClick('app-settings-page button.btn.btn-outline-danger');
    });
    it("retry failed case", async () => {
        await page.goto("https://angular.realworld.io/");
        await expect(page).toClick('app-layout-header li a[href="/login"]');
        await expect(page).toFill('app-auth-page form input[formcontrolname="email"]',"e2etest@163.com");
        await expect(page).toFill('app-auth-page form input[formcontrolname="password"]',"12345678");
        await expect(page).toClick('app-auth-page button[type="submit"]');
        await expect(page).toClick('app-auth-page button123');
    });

    it("not retry success case",async() => {
        await page.goto("https://angular.realworld.io/");
        await expect(page).toClick('app-layout-header li a[href="/login"]');
        await expect(page).toFill('app-auth-page form input[formcontrolname="email"]',"e2etest@163.com");
        await expect(page).toFill('app-auth-page form input[formcontrolname="password"]',"12345678");
        await expect(page).toClick('app-auth-page button[type="submit"]');
        await console.log("second success case just login")
    })
});