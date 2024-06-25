describe("hidden element demo", () => {
    it("get hidden element value", async () => {
        await page.goto("https://www.jquery-az.com/css/demo.php?ex=123.0_4");
        await expect(page).toMatchElement('li a', {text: 'Home'});
        await expect(page).toClick('#menu_div');
        await expect(page).toClick('p a', {text: 'Hide Menu'});
        await expect(page).toMatchElement('li a', {text: 'Home'});
        expect(await page.$eval('#menu_div', el => {
            return el.getAttribute('style')
        })).toContain('display: none');

        // await expect(page).toClick('#menu_div');
        // it show error if click a hidden element

        await expect(page).toClick('p a', {text: 'Show Menu'});
        expect(await page.$eval('#menu_div', el => {
            return el.getAttribute('style')
        })).toContain('display: initial');
    })
});