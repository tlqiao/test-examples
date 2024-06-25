const util = require('../../helper/util');
const globalFeedPage = require('../page/globalFeedPage');
const blogDetailsPage = require('../page/blogDetailsPage');
const prepareBlogTestData = require('../../testData/prepareBlogTestData');
const testDataManage = require('../../testData/testDataManage');
//采用page object设计模式
describe("add comment for blog test", () => {
    beforeEach('prepare blog for test', () => {
        //准备测试数据
        let randomNumber = util.getRandomNum(1000,99999);
        prepareBlogTestData.createBlogWithRegularUser("articleTitle"+randomNumber);
    });
    it("should add comment for blog successfully", () => {
        //执行测试案例
        util.loginWithRegularUser();
        globalFeedPage.goToGlobalFeed();
        testDataManage.getLoginUserInfo('userInfo');
        cy.get('@userInfo').then((data) => {
            globalFeedPage.goToBlogDetailByAuthor(data.regular.username);
        });
        blogDetailsPage.addComment("this is comment");
        //验证结果
        blogDetailsPage.shouldAddCommentSuccessfully("this is comment");
        //因为测试一个在线的一个网站，故无清理测试数据步骤
    })
});
