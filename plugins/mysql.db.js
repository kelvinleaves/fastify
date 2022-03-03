'use strict'

const fp = require('fastify-plugin')
const mysql = require('fastify-mysql')

module.exports = fp(async (fastify, opts) => {
  const mysqlOpts = Object.assign({}, {
    host: process.env.MYSQL_HOST || '',
    port: process.env.MYSQL_PORT || '',
    database: process.env.MYSQL_DATABASE || '',
    user: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASSWORD || ''
  }, opts.mysql)

  fastify.register(mysql, mysqlOpts)
})