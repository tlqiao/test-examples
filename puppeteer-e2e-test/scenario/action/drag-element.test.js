const drag = require('./function/drag');
describe('drag demo' ,()=> {
    it('should drag element successfully', async() => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await expect(page).toClick('#tried-test-cafe');
        await page.focus('.slider-container #slider span');
        const sourceElementHandle=await page.$('.slider-container #slider span');
        const targetElementHandle= await page.$('.slider-value:nth-child(2)');
        drag.dragElement(sourceElementHandle,targetElementHandle);
        await page.waitFor(5000);
    })
});