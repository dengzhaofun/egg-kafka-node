'use strict';
const kafkaNode = require('./lib/kafka-node');

module.exports = app => {
  if (app.config.kafkaNode.app) kafkaNode(app);
};
