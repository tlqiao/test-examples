function addComment(commentContent){
   cy.get('app-article-page form textarea').type(commentContent);
    cy.get('app-article-page form button').click();
}

function shouldAddCommentSuccessfully(commentContent) {
    cy.get('app-article-comment p').should('contain',commentContent)
}
module.exports={
   addComment:addComment,
   shouldAddCommentSuccessfully:shouldAddCommentSuccessfully
};
