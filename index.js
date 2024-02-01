// Include http module from Node.js
const http = require('http')

// Define server related variables
const hostname = 'localhost'
const port = 3000

// Handle request and response here
const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain')
  response.end('This is my first server created in Node.js')
})

// Start and listen the server
server.listen(port, hostname, () => {
  console.log(`The server is listening on http://${hostname}:${port}`)
})