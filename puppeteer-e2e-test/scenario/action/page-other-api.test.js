describe("page other api demo", () => {
    it("browser go back or forward demo", async () => {
        await page.goto("https://angular.realworld.io/");
        await expect(page).toClick('app-layout-header li a[href="/login"]');
        await page.goBack();
        await page.goForward();
        await page.hover('app-layout-header li a[href="/login"]');
        await page.waitFor(3000);
        await page.goBack();
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
        await page.waitFor(3000);

    });
    it.skip("support pdf generation when headless is true ", async()=> {
        await page.goto("https://angular.realworld.io/");
        await page.emulateMediaType('screen');
        await page.pdf({path: 'report/screen/page.pdf'});
    });

    it("support screenshot", async() => {
        await page.goto("https://angular.realworld.io/");
        await page.screenshot({path:'./report/screen/screen.pdf',type:'jpeg'})
    });

    it("set page viewport", async()=> {
        await page.setViewport({
            width: 640,
            height: 480,
            deviceScaleFactor: 1,
        });
        await page.goto('https://angular.realworld.io/');
    })

    it('should expose function successfully', async () => {
        await page.exposeFunction('printLog', async test => {
            console.log(test)
        });
        await page.evaluate(async () => {
            await window.printLog('this is expose function demo');
        });
    })
});