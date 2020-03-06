'use strict'

class PermissionUpdate {
  get validateAll() {
    return true
  }

  get rules() {
    const permissionId = this.ctx.params.id

    return {
      name: `min:5|max:255|unique:permissions,name,id,${permissionId}`,
      slug: `min:3|max:255|unique:permissions,slug,id,${permissionId}`,
      description: 'min:5'
    }
  }
}

module.exports = PermissionUpdate
