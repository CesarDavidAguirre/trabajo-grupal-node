// const { ValidateTransactionInput } = require('../schema/input/validateTransactionInput');
// const { TransactionValidatedEvent } = require('../schema/event/transactionValidated');
// const { emitTransactionValidated } = require('../service/emitTransactionValidated');

async function domain(eventPayload, eventMeta) {
  

// Validate transaction body
//   new ValidateTransactionInput(transactionData, eventMeta);

//   await emitTransactionValidated(eventPayload, eventMeta);
  return { body: 'Transaction validated' };
}

module.exports = { domain };
