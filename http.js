const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to home page')
  }
  if (req.url === '/about') {
    res.end('welcome to about page')
  } else {
    res.end(`
  <h1>Opps!</h1>
  <p> we cant find this page bbe</p>
  <a href = '/'>back to home page</a>
  `)
  }
})

server.listen(5000)
