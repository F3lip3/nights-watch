'use strict'

const crypto = require('crypto')
const moment = require('moment')

const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request }) {
    const email = request.input('email')
    const user = await User.findByOrFail('email', email)

    user.token = crypto.randomBytes(10).toString('hex')
    user.token_created_at = new Date()

    await Mail.send(
      [
        'emails.forgot_password',
        'emails.forgot_password_text'
      ],
      {
        email,
        name: user.username,
        token: user.token,
        link: `${request.input('redirect_url')}?token=${user.token}`
      },
      message => {
        message
          .to(user.email)
          .from(
            'atendimento@nightswatch.com.br',
            'Atendimento | Night\'s Watch')
          .subject('Recuperação de Senha')
      }
    )

    await user.save()
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract(2, 'days')
        .isAfter(user.token_created_at)
      if (tokenExpired) {
        return response
          .status(401)
          .send({
            error: {
              message: 'Reset password token is expired!'
            }
          })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({
          error: {
            message: 'An error occurred reseting password!'
          }
        })
    }
  }
}

module.exports = ForgotPasswordController
