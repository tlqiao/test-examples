import {Selector, t} from "testcafe";

fixture("debug demo");
test("should add successfully ",async()=> {
        await t.navigateTo('http://juliemr.github.io/protractor-demo/');
        debugger;
        await t.typeText('input[ng-model="first"]', '8', {replace: true});
        const selectSubtraction = Selector('select[ng-model="operator"]').find('option').withText('-');
        await t.click('select[ng-model="operator"]')
            .click(selectSubtraction);
        await t.typeText('input[ng-model="second"]', '3', {replace: true});
        await t.click("#gobutton");
        await t.expect(Selector('h2').innerText).contains("5");
        const lastValue = Selector('tbody tr').nth(0).find('td').nth(2).innerText;
        await t.expect(lastValue).contains("5");
    });