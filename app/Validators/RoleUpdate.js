'use strict'

class RoleUpdate {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      name: 'required|min:5|max:255|unique:roles',
      slug: 'required|min:3|max:255|unique:roles',
      permissions: 'array',
      'permissions.*': 'integer|above:0'
    }
  }
}

module.exports = RoleUpdate
