import http, { request } from 'node:http'

export const HttpHelper = {
  host: null as string,
  port: null as number,

  createServer: (host: string, port: number) => {
    const requestListener = function (req, res) {}
    const server = http.createServer(requestListener)
    return server.listen(port, host, () => {
      console.log(`Server is running ${host}${port}`)
    })
  },
}
