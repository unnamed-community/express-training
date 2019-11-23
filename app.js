require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes')

app.set('views', './views')
app.set('view engine', 'pug')
app.use('/public', express.static('public'))

app.use(routes)

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}`))
