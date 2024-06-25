import {Selector, t} from 'testcafe'
fixture("hover demo");
test('should hover successfully', async()=> {
   await t.navigateTo("https://chercher.tech/practice/popups");
   await t.hover('#sub-menu');
   const googleLink=Selector('div a').withText('Google');
   await t.click(googleLink)
});