'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/info', async function (request, reply) {
    return { info: 'Hello Word!'}
  })
}
