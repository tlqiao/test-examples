import {t,Selector} from 'testcafe'
fixture('shadow dom element demo');
test('should control element in shadow dom successfully', async () => {
    await t.navigateTo('https://radogado.github.io/shadow-dom-demo/');
    const elementInShadowDom = Selector(()=>document.querySelector('#app').shadowRoot.querySelector('#container p'));
    await t.expect(elementInShadowDom.textContent).eql('Dynamically generated content');
});