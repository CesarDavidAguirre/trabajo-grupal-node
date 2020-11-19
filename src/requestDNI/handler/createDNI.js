const { commandMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/commandApi');
const outputMode = require('ebased/handler/output/commandApi');

const { domain } = require('../domain/createDNI');

module.exports.post = async (events, context) => {
  return commandMapper({ events, context }, inputMode, domain, outputMode);
};
