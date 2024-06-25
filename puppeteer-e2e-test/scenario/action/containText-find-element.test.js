describe("use regex to match element",() => {
    it("find element with contain text", async()=> {
        await page.goto('https://angular.realworld.io/');
        await expect(page).toClick('app-home-page li a',{text:/.*Global Feed.*/});
        await expect(page).toClick('app-layout-header li a',{text: /.*Sign in.*/})
    });
});