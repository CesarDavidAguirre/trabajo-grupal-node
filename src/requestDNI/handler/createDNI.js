const { commandMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/commandApi');
const outputMode = require('ebased/handler/output/commandApi');

const { domain } = require('../domain/createDNI');

module.exports.post = async (command, context) => {
  // Es importante saber que mapper estas usando, cada uno lleva una firma distinta
  // commandMapper lleva command y context
  // batchEventMapper lleva events y context
  return commandMapper({ command, context }, inputMode, domain, outputMode);
};
