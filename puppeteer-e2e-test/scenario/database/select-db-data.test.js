const db = require('./init-db');
function getUserDataByUserName(username) {
    db.connection.query('select * from user where username=?', [username], function (error, results) {
        if (error) throw error;
        console.log(JSON.parse(JSON.stringify(results[0])).username);
    });
}

function addUser(username, age) {
    db.connection.query('insert into user(username,age) values (?,?)', [username, age], function (error) {
        if (error) {
            throw error
        }
    })
}

function updateUserAge(username, age) {
    db.connection.query(
        {
            sql: 'update user set age=? where username=?',
            timeout: 3000,
            values: [age, username]
        }, function (error, results) {
            if (error) {
                throw error
            }
            console.log('update ' + results.affectedRows + ' rows');
            console.log('changed ' + results.changedRows + ' rows');
        }
    )
}

function closeConnection() {
    db.connection.end();
}

getUserDataByUserName('zhangshan');
addUser("lisi", '20');
updateUserAge('lisi', 66);
closeConnection();