import BodyParser from 'body-parser';
import Express from 'express';
import SenecaServer from './seneca';

const { Router } = Express;
const context = new Router();

SenecaServer(context);

const server = Express();
server.use(BodyParser.json());
server.use(context);
const port = process.PORT || 8080;
server.listen(port);
console.log(`Server listen in ${port}`);
