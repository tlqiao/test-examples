const mysql = require('mysql');
const configManage = require('../config/configManage');
const secret=require('./secret');
const connection = mysql.createConnection({
    host: configManage.getDBConnectionInfo.host,
    user: configManage.getDBConnectionInfo.user,
    password: secret.decrypt(configManage.getDBConnectionInfo().password),
    database: configManage.getDBConnectionInfo.dataBase
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
module.exports = {
    connection: connection
};