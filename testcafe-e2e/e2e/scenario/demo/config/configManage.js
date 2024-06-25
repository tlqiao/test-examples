const fs = require('fs');
const configs = require('./config');
 function getConfigs() {
    const allConfigs = JSON.parse(fs.readFileSync('./e2e/scenario/demo/config/config.json'));
    let activeEnv;
    let configs = allConfigs.dev;
    process.env['ACTIVE_ENV'] = 'st';
    process.env.ACTIVE_ENV ? activeEnv = process.env.ACTIVE_ENV : activeEnv = allConfigs.active;
    if (activeEnv == "dev") {
        configs = allConfigs.dev
    } else if (activeEnv == "st") {
        configs = allConfigs.st
    }
    return configs
}

 function getConfigsTwo() {
    console.log(configs.dev);
    console.log(configs.active)
}
getConfigsTwo();

module.exports={
    getConfigs:getConfigs
};
