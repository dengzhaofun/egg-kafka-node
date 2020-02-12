'use strict';
const kafkaNode = require('./lib/kafka-node');

module.exports = agent => {
  if (agent.config.kafkaNode.agent) kafkaNode(agent);
};
