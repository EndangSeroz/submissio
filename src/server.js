/* eslint-disable no-unused-vars */
const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const server = Hapi.server({
  port: 9000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*']
    }
  }
})

const init = async () => {
  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
