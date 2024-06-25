async function addComment(addedComment) {
   await expect(page).toFill('app-article-page form textarea',addedComment);
   await expect(page).toClick('app-article-page form button',{text:"Post Comment"})
}

async function shouldAddCommentSuccessfully(addedComment) {
   await page.waitForSelector('app-article-comment p');
   await expect(await page.$eval('app-article-comment p',el => {return el.innerText})).toEqual(addedComment)

}

async function shouldAddCommentSuccessfully2(addedComment) {
    await expect(page).toMatchElement('app-article-comment p');
    await expect(page.$('app-article-comment p')).toMatch(addedComment);

}
module.exports={
    addComment:addComment,
    shouldAddCommentSuccessfully:shouldAddCommentSuccessfully
};