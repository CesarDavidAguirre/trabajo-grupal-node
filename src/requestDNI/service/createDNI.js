const sqs = require('ebased/service/storage/dynamo');
const SEND_TRANSACTION_SQS = process.env.SEND_TRANSACTION_SQS;

const emitTransactionValidated = async (transactionValidatedEvent) => {
  const { eventPayload, eventMeta } = transactionValidatedEvent.get();

  const sqsSendParams = {
    QueueUrl: SEND_TRANSACTION_SQS,
    MessageBody: eventPayload,
  };
  await sqs.send(sqsSendParams, eventMeta);
};

module.exports = { emitTransactionValidated };