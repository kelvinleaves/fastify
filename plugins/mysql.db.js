'use strict'

const fp = require('fastify-plugin')
const mysql = require('fastify-mysql')

module.exports = fp(async (fastify, opts) => {
  const mysqlOpts = Object.assign({}, {
    host: process.env.MYSQL_HOST || '122.9.72.213',
    port: process.env.MYSQL_PORT || '3306',
    database: process.env.MYSQL_DATABASE || 'camera180_miniprogram',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'Xzb704020'
  }, opts.mysql)

  fastify.register(mysql, mysqlOpts)
})