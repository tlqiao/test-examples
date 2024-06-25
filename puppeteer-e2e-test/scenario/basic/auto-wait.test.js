describe('auto-wait with jest-expect ', () => {
    it('should add numbers correctly with auto wait', async () => {
        await page.goto('http://juliemr.github.io/protractor-demo/');
        await expect(page).toFill('input[ng-model="first"]','5');
        await expect(page).toSelect('select[ng-model="operator"]','SUBTRACTION');
        await expect(page).toFill('input[ng-model="second"]','3');
        await expect(page).toClick('#gobutton');
        await expect(page).toMatchElement('h2',{text:'2'});
        await expect(page).toMatchElement('tbody tr:nth-child(1) td:nth-child(3)',{text:'2'});
    })
});