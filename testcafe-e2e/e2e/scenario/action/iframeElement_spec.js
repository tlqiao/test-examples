import {Selector, t} from 'testcafe'
fixture('control element in iframe demo');
test('should select and click element in iframe successfully', async () => {
    await t.navigateTo('https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml_button_test');
    await t.switchToIframe('#iframeResult');
    await t.expect(Selector('h1').innerText).contains("The button Element");
    await t.setNativeDialogHandler(() => true)
        .click('button');
    await t.switchToMainWindow();
    const button= Selector('div button').withText('Run »');
    await t.click(button);
});