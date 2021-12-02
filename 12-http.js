const http = require('http')

//req information about request

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to home')
  } else if (req.url === '/about') {
    res.end('Here is our story')
  } else {
    res.end(`<h1>Oops!</h1>
      <a href="/">back home</a>`)
  }
})

server.listen(5000)
