import PersonModel from '../models/person.model';
import Util from './util.service';

function PersonService() {
  const role = 'person';

  this.add({ role, path: 'save' }, (msg, reply) => {
    const person = new PersonModel(msg.args.body);
    Util.parsePromiseToReply(person.save(), reply);
  });

  this.add({ role, path: 'update' }, (msg, reply) => {
    Util.parsePromiseToReply(PersonModel.updateByUUID(msg.args.body), reply);
  });

  this.add({ role, path: 'find' }, (msg, reply) => {
    Util.parsePromiseToReply(PersonModel.findByParams(msg.args.query), reply);
  });

  this.act('role:web', {
    routes: {
      prefix: '/person',
      pin: `role:${role},path:*`,
      map: {
        save: { POST: true },
        update: { POST: true },
        find: { GET: true },
      },
    },
  }, Util.logInitApi);
}

export default PersonService;
