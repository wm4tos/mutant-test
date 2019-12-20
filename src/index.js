const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSwagger = require('express-swagger-generator');

const routes = require('./routes');
const { PORT } = require('./config');
const { errorHandler } = require('./middlewares');
const { httpCodes: httpStatusHelper } = require('./helpers/');

const { Router } = express;
const app = express();
const server = http.createServer(app);

const options = {
  swaggerDefinition: {
    info: {
      title: 'Mutant API',
    },
    host: 'localhost:8080',
    basePath: '/api',
    produces: [
      'application/json',
    ],
    schemes: ['http'],
  },
  route: {
    url: '/swagger',
    docs: '/api-docs.json',
  },
  basedir: __dirname, // app absolute path
  files: ['./modules/**/routes.js', './modules/**/types.js'], // Path to the API handle folder
};

expressSwagger(app)(options);

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

app.use('/api', routes(Router()));

app.use((err, req, res, next) => errorHandler(err, req, res, next));

app.use((_, res) => res.status(httpStatusHelper('NOT_FOUND').status).json(httpStatusHelper('NOT_FOUND')));

const listen = () => server.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

const startServer = () => {
  listen();
};

startServer();

module.exports = app;
