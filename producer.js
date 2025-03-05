const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'log-producer',
    brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const run = async () => {
    await producer.connect();
    const logMessage = process.argv.slice(2).join(' ');
    if (logMessage) {
        await producer.send({
            topic: 'logs',
            messages: [{ value: logMessage }],
        });
        console.log(`Log enviado: ${logMessage}`);
    }
    await producer.disconnect();
};

run().catch(console.error);