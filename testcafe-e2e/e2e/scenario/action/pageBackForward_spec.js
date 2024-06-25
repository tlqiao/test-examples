import {ClientFunction,t,Selector} from "testcafe";
fixture("page back forward demo");
test("should browser back or forward successfully", async()=> {
    const goBack = ClientFunction(() => window.history.back());
    const forward = ClientFunction(() => window.history.forward());
    const getLocation = ClientFunction(() => window.location.href);

    await t.navigateTo("https://chercher.tech/practice/popups");
    await t.expect(getLocation()).contains('chercher.tech');
    await t.hover('#sub-menu');
    const googleLink=Selector('div a').withText('Google');
    await t.click(googleLink);
    await t.expect(getLocation()).contains('google');
    await goBack();
    await t.expect(getLocation()).contains('chercher.tech');
    await forward();
    await t.expect(getLocation()).contains('google');
});