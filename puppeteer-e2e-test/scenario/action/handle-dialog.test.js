describe("dialog demo", () => {
    it("simulate click close on alert dialog", async () => {
        await page.on('dialog', async dialog => {
            switch (dialog.type()) {
                case 'alert':
                    await dialog.dismiss();
                    break;
                case 'confirm':
                    await dialog.accept();
                    break;
                case 'prompt':
                    await dialog.accept("type things");
                    break;
                default :
                    throw "can't get dialog type"
            }
        });
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await expect(page).toClick('#populate');
    });
    it("simulate click ok button on alert dialog", async () => {
        await page.goto("https://chercher.tech/practice/popups");
        await expect(page).toClick('input[name="alert"]');
    });

    it("simulate click ok button on confirm dialog", async () => {
        await page.goto("https://chercher.tech/practice/popups");
        await expect(page).toClick('input[name="confirmation"]');
    });

    it("simulate input text on promote dialog", async () => {
        await page.goto("https://chercher.tech/practice/popups");
        await expect(page).toClick('input[name="prompt"]');
    })
});