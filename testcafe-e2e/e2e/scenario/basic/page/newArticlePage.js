import {Selector} from 'testcafe'
async function publishArticle(t,title,description,content) {
        await fillTitle(t,title)
        await fillDescription(t,description)
        await fillContent(t,content)
        await clickPublishArticleButton(t)
    }
    async  function fillTitle(t,title) {
        await t.typeText('app-editor-page input[formcontrolname="title"]',title)
    }

    async function fillDescription(t,description) {
        await t.typeText('app-editor-page input[formcontrolname="description"]',description)
    }

    async function fillContent(t,content) {
        await t.typeText('app-editor-page textarea[formcontrolname="body"]',content)
    }

    async function clickPublishArticleButton(t) {
        await t.click('app-editor-page button')
    }

    async function getArticleTitle() {
        return await Selector('app-article-page h1').innerText
    }

module.exports = { publishArticle: publishArticle,
    getArticleTitle: getArticleTitle
}