const configManage=require('../../config/configManage');
const rp= require('request-promise');
async function getToken(username,password) {
    const option= {
        method: "POST",
        uri: configManage.getConfigs().apiBaseUrl+'api/users/login',
        headers: {
            "Content-Type": "application/json"
        },
        body: {"user":{"email": username ,"password": password}},
        json: true
    };
    return rp(option).then(function(parseBody) {
        return parseBody.user.token
    }).catch(function(error) {console.log(error)})
}
module.exports={
    getToken:getToken
};