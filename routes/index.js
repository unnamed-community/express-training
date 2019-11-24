const express = require('express')
const router = express.Router()
const renderForm = require('../modules/form')

router.get('/', (req, res) => {
  res.render('index', { title: 'Homepage' })
})

router.get('/form', (req, res) => {
  const form = {
    submitButton: 'Sabroso',
    method: 'POST',
    action: '/sersi/path',
    fields: {
      email: {
        required: true,
        text: 'Email',
        type: 'email',
        validation: email => email.indexOf('@') !== -1
      },
      password: {
        required: true,
        text: 'Password',
        type: 'password',
        validation: 'pass => pass.length > 7'
      },
      country: {
        required: true,
        text: 'Country',
        type: 'select',
        options: [
          {
            value: 'Colombia',
            text: 'Colombia',
          },
          {
            value: 'España',
            text: 'España',
          }
        ]
      },
      passwordConfirmation: {
        required: true,
        text: 'Password Confirmation',
        type: 'password',
        validation: pass => pass.length > 7
      },
      name: {
        required: true,
        text: 'Name',
        type: 'text',
        validation: name => Boolean(name.length)
      },
      birthdate: {
        required: true,
        text: 'Bithdate',
        type: 'date',
        validation: date => new Date(date) < Date.now()
      }
    }
  }
  res.render('form', { title: 'Form', render_form: renderForm(form) })
})

module.exports = router