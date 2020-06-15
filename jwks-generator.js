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


// import public key
const key = asKey(fs.readFileSync('keys/public.pem'));

// cerate a keystore with RSA public key
const keystore = new KeyStore(key);

console.log(JSON.stringify(keystore.toJWKS()));