const path = require('path')
const pug = require('pug')

const filename = 'template/form.pug'
const filePath = path.resolve(__dirname, filename)

module.exports = form => () => {
  Object.keys(form.fields).forEach(key => {
    form.fields[key].validation = form.fields[key].validation.toString()
  })
  const html = pug.renderFile(filePath, {form})
  return html
}