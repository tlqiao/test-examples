function goToGlobalFeed(){
   cy.get('app-home-page li a').contains('Global Feed').click();
}

function goToBlogDetailByAuthor(authorName){
    // let hrefValue= '"'+"/profile/" +authorName +'"';
    // cy.get('app-article-meta a[href='+hrefValue+']').first().parents('app-article-preview').find('a h1').click()
    cy.get('app-article-meta a').contains(authorName).first().parents('app-article-preview').find('a h1').click()
}

function favoriteBlog(authorName){
    let hrefValue= '"'+"/profile/" +authorName +'"';
    cy.get('app-article-meta a[href='+hrefValue+']').first().parents('app-article-preview').find('app-favorite-button button').click()
}

function shouldFavoriteBlogSuccess(authorName){
    let hrefValue= '"'+"/profile/" +authorName +'"';
    cy.get('app-article-meta a[href='+hrefValue+']').first().parents('app-article-preview').find('app-favorite-button button').should('contain','1')

}

module.exports={
    goToGlobalFeed:goToGlobalFeed,
    goToBlogDetailByAuthor:goToBlogDetailByAuthor,
    favoriteBlog:favoriteBlog,
    shouldFavoriteBlogSuccess:shouldFavoriteBlogSuccess
};
