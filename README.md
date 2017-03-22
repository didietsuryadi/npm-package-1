# my-auth

An simple authentication using hash-password and jsonwebtoken

# install

`$ npm install my-auth`

# Usage

### myauth.signIn(passwordUser, passwordDatabase, payload, secret)

### myauth.verifyToken(token, secret)

### myauth.hash(password)

# Example

```
const myauth = require('my-auth');

auth.hash("somepassword") //it will return sha1$f326e8ad$1$cb6515862974675a421cac0594a8627889c13956

auth.signIn("somepassword", "sha1$f326e8ad$1$cb6515862974675a421cac0594a8627889c13956", {username:"somepassword"}, "secret")

//it will return { success: true,
  message: 'Enjoy your token!',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbWVwYXNzd29yZCIsImlhdCI6MTQ5MDE1ODY5NCwiZXhwIjoxNDkwMjQ1MDk0fQ.ck_f8Yve90lRxLV5NhWB7tBc-LvG7x2QXbKBuUQpCLQ' }

auth.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbWVwYXNzd29yZCIsImlhdCI6MTQ5MDE1NzQ3NSwiZXhwIjoxNDkwMjQzODc1fQ.L8CmONbkrwG70YASsWxMc7BioJi5XWi_xF7PmI7mtfc","secret")

//it will return { username: 'somepassword', iat: 1490157475, exp: 1490243875 }
```

### Thank you
