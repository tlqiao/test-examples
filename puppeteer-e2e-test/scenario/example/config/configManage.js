const fs = require('fs');
function getConfigs() {
    const allConfigs = JSON.parse(fs.readFileSync('scenario/example/config/config.json'));
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
module.exports={
    getConfigs:getConfigs
};