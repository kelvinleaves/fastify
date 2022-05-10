'use strict';

module.exports = (fastify, opts, next) => {
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/doc/api',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'REST API Spec',
        description: 'api',
        version: '1.0.0'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  });

  next();
}