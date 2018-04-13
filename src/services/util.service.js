const Util = {};

Util.parsePromiseToReply = (promise, reply) => {
  promise.then((object) => {
    reply(null, object);
  }).catch((err) => {
    reply(null, Util.formatApiError(err));
  });
};

Util.logInitApi = (err) => {
  if (err) console.log(err);
};

Util.formatApiError = (err) => {
  if (!err) {
    throw new Error('Provide an error');
  }
  const formatted = { error: true };
  if (err.message) {
    formatted.message = err.message;
  }
  if (err.errors) {
    formatted.errors = {};
    Object.keys(err.errors).map((type) => {
      formatted.errors[type] = {
        message: err.errors[type].message,
        type: err.errors[type].kind,
      };
    });
  }
  return formatted;
};

export default Util;
