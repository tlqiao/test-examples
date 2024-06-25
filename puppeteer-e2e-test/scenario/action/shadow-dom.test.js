describe("shadow dom demo", () => {
    it('should get shadow dom element', async () => {
        await page.goto('https://radogado.github.io/shadow-dom-demo/');

        // await page.$eval('#container p', el=> {console.log("the result is " + el.innerText)})
        // await page.$('#app').shadowRoot.$('#container p');
        // using above code to find element in shadow dom will failed

        const value = await page.evaluate(() => {
            return document.querySelector('#app').shadowRoot.querySelector('#container p').innerText
        });
        await console.log("the value is" + value)
    })
});