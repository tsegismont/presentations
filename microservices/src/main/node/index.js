var EventBus = require('vertx3-eventbus-client');

var eb = new EventBus('http://localhost:8080/eventbus');

eb.onerror = function (err) {
  console.error(err);
};

eb.onopen = function () {
  setInterval(function () {
    eb.publish('greetings', {msg: 'Hello from Node.js!'});
  }, 500);

  eb.registerHandler('greetings', function (err, msg) {
    console.log(msg.body.msg);
  });
};
