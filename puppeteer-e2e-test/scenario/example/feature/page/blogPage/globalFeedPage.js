async function gotoGlobalFeed() {
    await page.waitForSelector('app-home-page li.nav-item a');
    await page.evaluate(() => {
        document.querySelectorAll('app-home-page li.nav-item a')[1].click();
    });
}

async function favoriteBlog() {
    await page.waitForSelector('app-article-meta a[href="/profile/e2etest"]');
    await page.evaluate(() => {
        document.querySelector('app-article-meta a[href="/profile/e2etest"]').parentElement.querySelector('button').click();
    });
}

async function goToAddComment() {
    await page.evaluate(() => {
        document.querySelector('app-article-meta a[href="/profile/e2etest"]')
            .parentElement.parentElement.parentElement.querySelector('a h1').click();
    });
}

module.exports = {
    gotoGlobalFeed: gotoGlobalFeed,
    favoriteBlog: favoriteBlog,
    goToAddComment: goToAddComment
};