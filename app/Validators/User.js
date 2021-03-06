'use strict'

class User {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required|min:6|max:80|unique:users',
      email: 'required|email|max:254|unique:users',
      password: 'required|min:3|max:60|confirmed'
    }
  }
}

module.exports = User
