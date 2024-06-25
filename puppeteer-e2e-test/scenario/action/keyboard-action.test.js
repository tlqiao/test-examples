describe("keyboard action demo", () => {
    it("keyboard action practice", async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.focus('#developer-name');
        await page.keyboard.down('Shift');
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Shift');
        await page.keyboard.press('Tab');
        await expect(page).toClick('#tried-test-cafe');
        await page.focus('#comments');
        await page.keyboard.sendCharacter('DDD');
        await page.keyboard.press('Enter');
        await page.waitFor(3000);
    });
});