describe("debug demo", ()=> {
    it('should debug with debugger successfully', async()=> {
        await page.goto("https://angular.realworld.io/");
        await page.click('li a[href="/login"]');
        await page.goBack();
        await page.goForward();
        debugger;
        await page.click('li a[href="/register"]');
        await page.evaluate(()=> {document.querySelector('li a[href="/login"]').click()})
    })
});