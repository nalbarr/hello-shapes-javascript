/* eslint no-console: 0 */
/* eslint no-process-env: 0 */
import express from 'express';
import responseTime from 'response-time';
import path from 'path';
import homeRouter from './routes/homeRouter';
import versionRouter from './routes/versionRouter';

const DEFAULT_PORT = 8000;
const server = express();

server.use(responseTime());

// - - - - - - - - - - - - - - - - -
//  Static home router to api document
// - - - - - - - - - - - - - - - - -
server.use(express.static(path.resolve(`${__dirname}/public`)));

// - - - - - - - - - - - - - - - - -
//  Attach routers - - - - - - - - -
//  Attach home last b/c * route - -
// - - - - - - - - - - - - - - - - -
server.use(versionRouter);
server.use(homeRouter);

// - - - - - - - - - - - - - - - - -
//  Fire up server - - - - - - - - -
// - - - - - - - - - - - - - - - - -
if (!module.parent) {
  const listener = server.listen(DEFAULT_PORT, () => {
    console.log(`Alive and well on port: ${listener.address().port}`);
    console.log(`http://localhost:${listener.address().port}/hello-shapes.html`);
  });
}

export default server;
