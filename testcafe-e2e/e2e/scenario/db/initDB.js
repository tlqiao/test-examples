const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123456",
    database: "test"
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

async function closeConnection() {
    connection.end();
}
module.exports = {
    connection: connection,
    closeConnection:closeConnection
};