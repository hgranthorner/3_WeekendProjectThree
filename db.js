const { Client } = require('pg')
const conString = 'postgres://localhost/acmeweb'

const client = new Client(conString)

client.connect()

function getTitle(id) {
  return client
    .query('select name from pages where id = $1;', [id])
    .then(res => res.rows[0])
    .catch(_ => console.log('request failed'))
}

function getNames() {
  return client
    .query('select id, name from pages')
    .then(res => res.rows)
    .catch(_ => console.log('request failed'))
}

function getHomePageId() {
  return client
    .query('select id from pages where is_home_page = TRUE;')
    .then(res => res.rows[0])
    .catch(_ => console.log('request failed'))
}

function getContent(id) {
  return client
    .query('select name, body from content where page_id = $1;', [id])
    .then(res => res.rows)
    .catch(_ => console.log('request failed'))
}

module.exports = {
  getHomePageId,
  getTitle,
  getNames,
  getContent
}
