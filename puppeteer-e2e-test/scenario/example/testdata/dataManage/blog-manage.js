const getToken = require('./getToken');
const configsManage = require('../../config/configManage');
const csvToJson = require('csvtojson');
const rp= require('request-promise');
async function addBlog(username,password,title,content,desc) {
    await getToken.getToken(username,password).then(token => {
        const option = {
            method: "POST",
            uri: configsManage.getConfigs().apiBaseUrl+'api/articles/',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Token ' + token
            },
            body: {
                "article": {
                    "tagList": [],
                    "title": title ,
                    "description": desc ,
                    "body": content
                }
            },
            json: true
        };
        rp(option).then(function (parseBody) {
        })
    })
};
async function  addBlogToPrepareTestData() {
    let filePath=configsManage.getConfigs().dataBasePath+'/common/blog-details.csv';
    let blogData = await csvToJson().fromFile(filePath);
    filePath=configsManage.getConfigs().dataBasePath+'st/userInfo.csv';
    let userData=await csvToJson().fromFile(filePath);
   await addBlog(userData[0].username,userData[0].password,blogData[0].title,blogData[0].content,blogData[0].desc)
}
module.exports = {
    addBlogToPrepareTestData: addBlogToPrepareTestData
};