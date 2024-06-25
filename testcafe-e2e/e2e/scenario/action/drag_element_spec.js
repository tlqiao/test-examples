import {Selector} from 'testcafe'
fixture('drag element demo');
test('should drag element successfully', async (t) => {
    await t.navigateTo("http://devexpress.github.io/testcafe/example/");
    await t.click('#tried-test-cafe');
    const toAreaElement = Selector('.slider-container .slider-value').withText('5');
    await t.dragToElement('.slider-container #slider span', toAreaElement);
    await t.wait(3000);
});