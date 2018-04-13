import seneca from 'seneca';
import SenecaWeb from 'seneca-web';
import SenecaWebAdapter from 'seneca-web-adapter-express';
import PersonService from './services/person.service';

function SenecaServer(context) {
  const server = seneca();
  const senecaWebConfig = {
    context,
    adapter: SenecaWebAdapter,
    options: { parseBody: false },
  };
  server.use(SenecaWeb, senecaWebConfig);
  server.use(PersonService);
  return server;
}

export default SenecaServer;
