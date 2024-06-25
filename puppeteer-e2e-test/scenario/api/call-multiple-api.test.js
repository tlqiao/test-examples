const rp= require('request-promise');
async function createArticle(username, password) {
  await getToken(username, password).then(token => {
  const option = {
      method: "POST",
      uri : "https://conduit.productionready.io/api/articles/",
      headers: {
          "Content-Type": "application/json",
          "Authorization": 'Token ' + token
      },
      body: {"article":{"tagList":[],"title":"newArticle","description":"newArticle","body":"newArticle"}},
      json: true
  };
  rp(option).then(function(parseBody) {
      console.log(parseBody.article.title);
      console.log(parseBody.article.author.username);
  })
  })
}

async function getToken(username, password) {
     const option= {
        method: "POST",
        uri: "https://conduit.productionready.io/api/users/login",
        headers: {
            "Content-Type": "application/json"
        },
        body: {"user":{"email":username,"password":password}},
        json: true
    };
    return rp(option).then(function(parseBody) {
        console.log("the token is " + parseBody.user.token);
        return parseBody.user.token
    })
}
const rs = createArticle("e2etest@163.com","12345678");