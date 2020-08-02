import path from 'path';
import express from 'express';
import { ssrApplicationRender } from './srr';

// Configs values
const SERVER_PORT = 4444;

const appServer = express();

// Apply middlewares
appServer.use(express.static(path.join(__dirname, 'public')));

// Route response ssr
appServer.get('*', function (request, response) {
  let { httpVersion, method, url } = request;
  console.log(`[${httpVersion}]-[${method}] - ${url}`);
  response.send(ssrApplicationRender());
});

appServer.listen(SERVER_PORT, function () {
  console.log(`Application start running`);
});
