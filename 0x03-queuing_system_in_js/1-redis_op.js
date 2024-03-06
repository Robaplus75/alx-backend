#!/usr/bin/node
import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

function displaySchoolValue(schoolName) {
  client.GET(schoolName, (err, value) => {
    console.log(value);
  });
}

function setNewSchool(schoolName, value) {
  client.SET(schoolName, value, print);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
