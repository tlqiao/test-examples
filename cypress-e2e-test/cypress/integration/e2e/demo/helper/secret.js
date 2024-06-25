const CryptoJS  = require('crypto-js');

const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF'); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');  //十六位十六进制数作为密钥偏移量

function decrypt(encryptString) {
    let decrypt = CryptoJS.AES.decrypt(encryptString, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
}

function encrypt(plaintText) {
    let encrypt = CryptoJS.AES.encrypt(plaintText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypt.toString()
}

module.exports = {
    decrypt: decrypt,
    encrypt: encrypt
};