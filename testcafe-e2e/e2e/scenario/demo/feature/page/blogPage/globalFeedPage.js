import {Selector} from 'testcafe'
async function gotoGlobalFeed(t) {
    const selector =await Selector('app-home-page li a').withText('Global Feed');
    await t.click(selector)
}

async function favoriteBlog(t) {
    const selector = await Selector('app-article-meta a[href="/profile/e2etest"]').parent('app-article-meta').find('app-favorite-button button');
    await t.click(selector);
}

module.exports = {
    gotoGlobalFeed: gotoGlobalFeed,
    favoriteBlog: favoriteBlog,
};
