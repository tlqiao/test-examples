describe("multiple tab2 demo",  () => {
    it("change to another tab with listener way", async () => {
        browser.on('targetcreated', async (target) => {
            if (target.type() === 'page') {
                page = await target.page();
            }
        });
        await page.goto("https://freshdesignweb.com/jquery-html5-file-upload/");
        await expect(page).toClick('a[href="https://codepen.io/bi11johnston/pen/bsGDf"]');
        await page.waitFor(10000);
        await page.waitForSelector('a[href="/login"]');
        await page.click('a[href="/login"]');
        await expect(page).toFill('#login-email-field', 'testUser');
        await expect(page).toFill('#login-password-field_', 'testPassword');
    })
});