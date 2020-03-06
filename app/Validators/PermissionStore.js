'use strict'

class PermissionStore {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      name: 'required|min:5|max:255|unique:permissions',
      slug: 'required|min:3|max:255|unique:permissions',
      description: 'min:5'
    }
  }
}

module.exports = PermissionStore
