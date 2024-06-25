describe("mouse action demo", () => {
    it("mouse action ", async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const elementHandle = await page.$('#developer-name');
        const rect = await page.evaluate((elementHandle) => {
            const {top, left, bottom, right} = elementHandle.getBoundingClientRect();
            return {top, left, bottom, right};
        }, elementHandle);
        console.log('the position is' + rect.top,rect.left,rect.bottom,rect.right);

        await page.mouse.click(rect.left, rect.top, {'button': 'right'});

        await page.mouse.click(rect.left, rect.top, {'button': 'left'});

        const elementHandle2 = await page.$('#windows');
        await elementHandle2.click({button: 'left',});
    });
});