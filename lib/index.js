const hash = require('password-hash')
const jwt = require('jsonwebtoken')

module.exports = {
  signIn: function (passwordUser, passwordDatabase, payload, secret) {
    if(hash.verify(passwordUser, passwordDatabase)){
      const token = jwt.sign(payload, secret, { expiresIn: '1d' });
      return {
        success: true,
        message: 'Enjoy your token!',
        token: token
      }
    } else {
      return {
        success: false,
        message: 'Wrong Credentials'
      }
    }
  },
  verifyToken: function (token, secret) {
    var verifying = jwt.verify(token, secret)
    if(!verifying.iat){
      return "error when verify"
    }else{
      return verifying
    }
  },
  hash: function (password) {
    return hash.generate(password)
  }
}
