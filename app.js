'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

process.env.MYSQL_HOST = '122.9.72.213';
process.env.MYSQL_PORT = '3306';
process.env.MYSQL_DATABASE = 'camera180_miniprogram';
process.env.MYSQL_USER = 'root';
process.env.MYSQL_PASSWORD = 'Xzb704020';

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
