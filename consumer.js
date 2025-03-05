const { Kafka } = require('kafkajs');
const fs = require("node:fs/promises");

const kafka = new Kafka({
    clientId: 'log-consumer',
    brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'log-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'logs', fromBeginning: true });

    await consumer.run({
        eachMessage: async (data) => {
            const { message, topic } = data;
            const { timestamp } = message; 
            await fs.mkdir(topic, { recursive: true });
            await fs.appendFile(`${topic}/log_${timestamp}.txt`, `${message.value}\n`, 'utf-8');
        },
    });
};

run().catch(console.error);