const swaggerJsDoc = require('swagger-jsdoc');
const swaggerExpress = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    components: {},
    info: {
      openapi: '3.0.0',
      title: 'TicTacTo API',
      version: '0.0.1',
      description: 'API to start, play and complete a game of TicTacToe',
      contact: {
        name: 'Sebastian und Miriam',
        url: 'https://github.com/basti-n/tic-tac-toe',
      },
      servers: [`http://localhost:${process.env.PORT || 5000}`],
    },
  },
  apis: ['routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {
  serve: swaggerExpress.serve,
  setup: () => swaggerExpress.setup(swaggerDocs),
};
