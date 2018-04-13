import 'babel-polyfill';
import mongoose from 'mongoose';
import uuid from 'uuid';

const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  age: {
    type: Number,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
    default: (() => uuid.v4()),
  },
});

PersonSchema.set('toJSON', {
  virtuals: true,
  transform(doc, obj) {
    obj.id = obj.uuid;
    delete obj._id;
    delete obj.__v;
    delete obj.uuid;
    return obj;
  },
});

PersonSchema.statics.updateByUUID = async function updateByUUID(person) {
  const personDB = await this.findOne({ uuid: person.id });
  if (personDB) {
    delete person.id;
    personDB.set(person);
    return personDB.save();
  }
  throw new Error('Person not founded');
};

PersonSchema.statics.findByParams = function findByParams(params) {
  return this.find(params);
};

export default mongoose.models.Person || mongoose.model('Person', PersonSchema);
