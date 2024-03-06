#!/usr/bin/node
import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});
client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

function printmessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.PUBLISH('holberton school channel', message);
  }, time);
}
printmessage('Holberton Student #1 starts course', 100);
printmessage('Holberton Student #2 starts course', 200);
printmessage('KILL_SERVER', 300);
printmessage('Holberton Student #3 starts course', 400);
