import http from 'node:http'

// Create a local server to receive data from
export const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(
    JSON.stringify({
      data: 'Hello World!',
    })
  )
})
