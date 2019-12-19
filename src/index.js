const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSwagger = require('express-swagger-generator');

const routes = require('./routes');
const { PORT } = require('./config');
const mongo = require('./mongo');
const { errorHandler } = require('./middlewares');
const errorHelper = require('./helpers/error');
const seederHelper = require('./helpers/seed');

const { Router } = express;
const app = express();
const server = http.createServer(app);

const mongooseConnection = mongo();

const options = {
  swaggerDefinition: {
    info: {
      title: 'Boilerplate API',
    },
    host: 'localhost:3000',
    basePath: '/api',
    produces: [
      'application/json',
    ],
    schemes: ['http'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        scheme: 'bearer',
        name: 'Authorization',
        description: '',
      },
    },
  },
  route: {
    url: '/swagger',
    docs: '/api-docs.json',
  },
  basedir: __dirname, // app absolute path
  files: ['./modules/**/routes.js'], // Path to the API handle folder
};

expressSwagger(app)(options);

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

app.use('/api', routes(Router()));

app.use((err, req, res, next) => errorHandler(err, req, res, next));

app.use((_, res) => res.status(errorHelper('NOT_FOUND').status).json(errorHelper('NOT_FOUND')));

const listen = () => server.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

const startServer = async () => {
  await seederHelper();
  listen();
};


mongooseConnection
  .on('error', console.error)
  .on('disconnected', mongo)
  .once('open', startServer);

module.exports = app;
