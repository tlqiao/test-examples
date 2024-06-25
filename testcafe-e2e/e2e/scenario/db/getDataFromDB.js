const db = require('./initDB');

async function getLoginUserPassword(userName) {
    return new Promise((resolve, reject) => {
        db.connection.query('select * from loginUser where username=?', [userName], function (error, results) {
            if (error) {
                console.log(error);
                reject(error)
            } else {
                resolve(JSON.parse(JSON.stringify(results[0])).password)
            }
        })
    })

}

async function getLoginUser(userName) {
    return new Promise((resolve, reject) => {
        db.connection.query('select * from loginUser where username=?', [userName], function (error, results) {
            if (error) {
                console.log(error);
                reject(error)
            } else {
                resolve((results[0]))
            }
        })
    })

}

module.exports = {
    getLoginUserPassword: getLoginUserPassword,
    getLoginUser:getLoginUser
};
