function header(title, names) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
  </head>
  <body>
    <div class="container">
      <h1>Acme Web</h1>
      <ul class="nav nav-tabs" style="margin-bottom: 20px">
      ${names
        .map(name => {
          return `<li class="nav-item"><a href="/pages/${name.id}" class="nav-link">${name.name}</a></li>`
        })
        .join('')}
    </ul>`
}

function body(data) {
  return `${data
    .map(row => {
      return `<h1>${row.name}</h1>
      <p>${row.body}</p>`
    })
    .join('')}
  `
}

function footer() {
  return `</div>
  </body>
</html>`
}

module.exports = {
  header,
  body,
  footer
}
