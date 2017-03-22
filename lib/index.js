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
    jwt.verify(token, secret, function(err, decoded) {
      if(decoded) {
        return decoded
      }else{
        return err
      }
    })
  },
  hash: function (password) {
    return hash.generate(password)
  }
}
