import menu from './page/menuPage'
import newArticle from './page/newArticlePage'
fixture('publish new article test')
test('should publish new article test', async (t) => {
   await menu.login(t)
   await menu.goToNewArticle(t)
   await newArticle.publishArticle(t,'title','description','content')
   await t.expect(await newArticle.getArticleTitle()).eql('title')
} )