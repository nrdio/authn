const jose = require('jose');
const fs = require('fs');

const {
    JWK: {
        asKey
    }, // JSON Web Key (JWK)
    JWKS: {
        KeyStore
    }, // JSON Web Key Set (JWKS)
    errors // errors utilized by jose
} = jose;


// import private key
const key = asKey(fs.readFileSync('keys/private.pem'));

// cerate a keystore with RSA private key
const keystore = new KeyStore(key);

console.log(JSON.stringify(keystore.toJWKS()));