const loginPage = require('../../page/commonPage/loginPage');
const globalFeedPage = require('../../page/blogPage/globalFeedPage');
fixture("favorite blog test")
test("should favorite for blog successfully", async (t) => {
    await loginPage.loginWithUserData(t);
    await globalFeedPage.gotoGlobalFeed(t);
    await globalFeedPage.favoriteBlog(t);
});
