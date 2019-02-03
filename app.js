const express = require('express')
const db = require('./db')
const html = require('./views/html')

const app = express()

module.exports = app

app.get('/', (req, res, next) => {
  db.getHomePageId()
    .then(data => {
      const id = data.id
      req.params.id = id
      res.redirect(`/pages/${id}`)
    })
    .catch(next)
})

app.get('/pages/:id', (req, res, next) => {
  const id = req.params.id
  db.getNames()
    .then(names => {
      req.acmeWebNames = names
    })
    .catch(next)
  db.getTitle(id)
    .then(title => {
      req.acmeWebTitle = title.name
    })
    .catch(next)
  db.getContent(req.params.id)
    .then(data => {
      req.acmeWebContent = data
      console.log(req.acmeWebNames)
      res.send(html.header(req.acmeWebTitle, req.acmeWebNames, req.params.id) + html.body(data) + html.footer())
    })
    .catch(next)
})
