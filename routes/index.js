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
        name: 'Email',
        type: 'email',
        validation: email => email.indexOf('@') !== -1
      },
      password: {
        required: true,
        name: 'Password',
        type: 'password',
        validation: 'pass => pass.length > 7'
      },
      passwordConfirmation: {
        required: true,
        name: 'Password Confirmation',
        type: 'password',
        validation: pass => pass.length > 7
      },
      name: {
        required: true,
        name: 'Name',
        type: 'text',
        validation: name => Boolean(name.length)
      },
      birthdate: {
        required: true,
        name: 'Bithdate',
        type: 'date',
        validation: date => new Date(date) < Date.now()
      }
    }
  }
  res.render('form', {title: 'Form', render_form: renderForm(form)})
})

module.exports = router