'use strict'

class ResetPassword {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      token: 'required',
      password: 'required|min:3|max:60|confirmed'
    }
  }
}

module.exports = ResetPassword
