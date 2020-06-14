const jose = require('jose');
const fs = require('fs');

const {
    JWK: {
        asKey
    }, // JSON Web Key (JWK)
    JWT: {
        sign
    }, // JSON Web Token (JWT)
    errors // errors utilized by jose
} = jose;


// import private key
const key = asKey(fs.readFileSync('keys/private.pem'));

const payload = {
    'status': 'active'
}

const token = sign(payload, key, {
    algorithm: 'RS256',
    audience: 'https://my-aws-api-gateway.com',
    issuer: 'https://raw.githubusercontent.com/nrdio/authn/master/',
    expiresIn: '10 days',
    header: {
        typ: 'JWT'
    }
})

console.log(token);