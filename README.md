Project for utility scripts to generate JWKS, JWT Token & Verifying Token using JOSE Library

## Genreate keys

Test [public key](keys/public.pem) and [private key](keys/private.pem) pair is generated using following commands

#### Generate 2048 bit RSA Private Key
```
openssl genrsa -out private.pem 2048
```

#### Export Public Key from Private Key
```
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```

## How to run?

#### Create JWKS from existing public key
```
node jwks-generator.js
```

#### Create JWT usign [test private key](keys/private.pem)
```
node jwt-generator.js
```