import mongoose from 'mongoose';

// Use native promises
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
  throw err;
});

mongoose.connect('URI_MONGODB');
