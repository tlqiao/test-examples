var activeEnv=Cypress.env('appEnv');
function getConfig() {
    let configs= JSON.parse(JSON.stringify(Cypress.env('configs')));
    if(Cypress.env('appEnv') == 'dev') {
        return configs.dev
    }else {
        return configs.st
    }
}
function getBaseUrl(){
   return getConfig().baseUrl
}

function getApiBaseUrl(){
   return getConfig().apiUrl
}

function getDBConnectionInfo(){
   return getConfig().mysql
}

module.exports = {
    getBaseUrl: getBaseUrl,
    getDBConnectionInfo: getDBConnectionInfo,
    getApiBaseUrl:getApiBaseUrl
};

