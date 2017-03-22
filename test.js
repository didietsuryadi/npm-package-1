const auth = require('./lib/index.js')

console.log(auth.hash("somepassword"));
console.log(auth.signIn("somepassword", "sha1$59cf9e96$1$1d3b0cf846555b5ced908625e757b091c6e6cdf8", {username:"somepassword"}, "secret"));
console.log(auth.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbWVwYXNzd29yZCIsImlhdCI6MTQ5MDE1NzQ3NSwiZXhwIjoxNDkwMjQzODc1fQ.L8CmONbkrwG70YASsWxMc7BioJi5XWi_xF7PmI7mtfc","secret"));
