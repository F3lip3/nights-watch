'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserForgotPasswordTokenSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('token')
      table.timestamp('token_created_at')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumns(['token', 'token_created_at'])
    })
  }
}

module.exports = AddUserForgotPasswordTokenSchema
