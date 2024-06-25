describe("get element info to validate ", () => {
    it("validate element status", async() => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await expect(page).not.toMatchElement('#submit123');
        await expect(page).toMatchElement('#submit-button');
        await expect(page).toMatchElement('#submit-button', {text:'Submit'});

        const radioCount = await page.$$eval('label input[type="radio"]',el=>{return el.length});
        expect(radioCount).toEqual(3);

        expect(await page.$eval('#submit-button', el => {return el.getAttribute('disabled')})).toEqual('disabled');
        await expect(page).toFill('#developer-name','abc');
        expect(await page.$eval('#submit-button', el => {return el.getAttribute('disabled')})).toBeFalsy();

        expect(await page.$eval('#windows',el=> {return el.checked})).toBeFalsy();
        await expect(page).toClick('#windows');
        expect(await page.$eval('#windows',el=> {return el.checked})).toBeTruthy();

        expect(await page.$eval('#main-form #remote-testing',el=> {return el.checked})).toBeFalsy();
        await expect(page).toClick('#main-form #remote-testing');
        expect(await page.$eval('#main-form #remote-testing',el=> {return el.checked})).toBeTruthy();

        await expect(page).toMatch('Example');
        await expect(page).toMatchElement('h1',{text:'Example'});

        const innerText= await page.$eval('h1',el=> {return el.innerText});
        await expect(innerText).toEqual('Example');
        await expect(innerText).toContain('ample');
    });


    it('elementHandle validation',async()=> {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const elementHandle =await page.$('#tried-section label');
        await expect(elementHandle).toMatch('I have tried TestCafe');
    });

    it('validation with containText',async()=> {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const elementHandle =await page.$('#tried-section label');
        await expect(elementHandle).toMatch('I have tried TestCafe');
        await expect(elementHandle).toMatch(/.*TestCafe.*/)
    })

    it("get value with document querySelector", async () => {
        await page.goto('https://angular.realworld.io/');
        await page.waitForSelector('app-layout-header li a[href="/login"]');
        const value = await page.evaluate(() => {
            return document.querySelector('app-layout-header li a[href="/login"]').innerText
        });
        await expect(value).toEqual('Sign in');
        await expect(value).toContain('Sign');

        const length=await page.evaluate(()=> {
            return document.querySelectorAll('app-layout-header li a[href="/login"]').length
        });
        await expect(length).toEqual(1);
    });

    it("get element list value", async()=> {
        await  page.goto('https://news.ycombinator.com/news');
        const stories = await page.$$eval('a.storylink', anchors => { return anchors.map(anchor => anchor.textContent).slice(0, 10) });
        console.log(stories)
    });
});