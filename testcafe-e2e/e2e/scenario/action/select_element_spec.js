import {Selector, t} from 'testcafe'

fixture('select control element and validate result test');
test('should check MacOs radio button', async () => {
    await t.navigateTo("http://devexpress.github.io/testcafe/example/");
    const macOSRadioButton = Selector('.column.col-2').find('label').child(el => el.value === 'MacOS');
// const macOSRadioButton = Selector('.column.col-2 label #macos');
// const macOSRadioButton = Selector('#macos');
    await t
        .click(macOSRadioButton.parent())
        .expect(macOSRadioButton.checked).ok();
});
test('should login and post article successfully', async () => {
    await t.navigateTo("https://angular.realworld.io/");
    const signLink = await Selector('app-layout-header li a').withText('Sign in');
    await t.click(signLink)
    await t.typeText('app-auth-page form input[formcontrolname="email"]', 'e2etest@163.com');
    await t.typeText('app-auth-page form input[formcontrolname="password"]', '12345678');
    await t.click('app-auth-page button[type="submit"]');
    await t.click('app-layout-header ul li>a[routerlink="/editor"]')
});

test('should add correctly', async () => {
    await t.navigateTo('http://juliemr.github.io/protractor-demo/');
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

test('should control the test web application successfully', async () => {
    await t.navigateTo('https://devexpress.github.io/testcafe/example/');
    await t.typeText('#main-form #developer-name', 'test user', {replace: true});
    await t.setNativeDialogHandler(() => true)
        .click('#main-form #populate');
    const myCheckBox = Selector('#main-form #remote-testing');
    await t.click(myCheckBox);
    await t.expect(myCheckBox.checked).ok();
    const myRadioButton = Selector('#main-form label').withText('Windows').child('input');
    await t.click(myRadioButton);
    await t.expect(myRadioButton.checked).ok();
    const selectBoth = Selector('#preferred-interface').find('option').withText('Both');
    await t.click('#preferred-interface')
        .click(selectBoth);
    await t.click('#tried-test-cafe');
    await t.expect(Selector('#tried-test-cafe').checked).ok();
    const toAreaElement = Selector('.slider-container .slider-value').withText('5');
    await t.dragToElement('.slider-container #slider span', toAreaElement);
    await t.typeText('#comments', 'this is a test', {replace: true})
});