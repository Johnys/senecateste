function math() {
  this.add('role:math,cmd:sum', (msg, respond) => {
    respond([(msg.number1 + msg.number2)]);
  });
}

export default math;
