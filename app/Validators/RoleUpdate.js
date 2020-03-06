'use strict'

class RoleUpdate {
  get validateAll() {
    return true
  }

  get rules() {
    const roleId = this.ctx.params.id

    return {
      name: `min:5|max:255|unique:roles,name,id,${roleId}`,
      slug: `min:3|max:255|unique:roles,slug,id,${roleId}`,
      permissions: 'array',
      'permissions.*': 'integer|above:0'
    }
  }
}

module.exports = RoleUpdate
