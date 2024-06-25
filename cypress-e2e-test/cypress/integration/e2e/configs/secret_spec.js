const secret = require('./secret');
it ('should encrypt and decrypt correctly',() => {
    console.log(secret.encrypt('12345678'));
    console.log(secret.decrypt('C4xAhY/0Dv8noBcZRtE8Mg=='));
});