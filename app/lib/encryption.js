// crypto module
const crypto = require("crypto");
const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
const IV = "5183666c72eec9e4";
const ALGO = "aes-256-cbc"

exports.encrypt =  (str) => { 

let cipher = crypto.createCipheriv(ALGO, ENC, IV);
let encrypted = cipher.update(str, 'utf8', 'base64');
encrypted += cipher.final('base64');

return encrypted;
    
}

exports.dencrypt =  (str) => { 

    let decipher = crypto.createDecipheriv(ALGO, ENC, IV);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    console.log((decrypted + decipher.final('utf8')))
    return (decrypted + decipher.final('utf8'));
    
        
    }