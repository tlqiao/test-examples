// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config

const mysql = require('mysql');
module.exports = (on, config) => {
    require('cypress-plugin-retries/lib/plugin')(on);
    const dbConfig=config.env.configs[config.env.appEnv];
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123456',
        database: 'test'
    });
    on('task', {
        queryDBWithParameter(sql) {
            return new Promise((resolve, reject) => {
                con.query(sql, function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        return resolve(result)
                    }
                })
            })
        }
    });
    const dbConnection = mysql.createConnection({
        host: dbConfig.mysql.host,
        user: dbConfig.mysql.user,
        password: dbConfig.mysql.password,
        database: dbConfig.mysql.dataBase
    });
    on('task', {
        queryTestDB(sql) {
            return new Promise((resolve, reject) => {
                dbConnection.query(sql, function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        return resolve(result)
                    }
                })
            })
        }
    });

};
module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args

        if (browser.family === 'chromium' && browser.name !== 'electron') {
            // auto open devtools
            launchOptions.args.push('--auto-open-devtools-for-tabs')
        }

        if (browser.family === 'firefox') {
            // auto open devtools
            launchOptions.args.push('-devtools')
        }

        if (browser.name === 'electron') {
            // auto open devtools
            launchOptions.preferences.devTools = true
        }

        // whatever you return here becomes the launchOptions
        return launchOptions
    })
};
