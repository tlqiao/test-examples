const blogManage= require('../../../testdata/dataManage/blog-manage');
const loginPage = require('../../page/commonPage/loginPage');
const globalFeedPage=require('../../page/blogPage/globalFeedPage');
const blogEditPage=require('../../page/blogPage/blogEditPage');
describe("add comment test scenario", ()=> {
    it("should favorite and add comment for blog successfully", async() => {
        await blogManage.addBlogToPrepareTestData();
        await loginPage.loginWithUserData();
        await globalFeedPage.gotoGlobalFeed();
        await globalFeedPage.favoriteBlog();
        await globalFeedPage.goToAddComment();
        await blogEditPage.addComment('commentForUITest');
        await blogEditPage.shouldAddCommentSuccessfully('commentForUITest');
    })
});