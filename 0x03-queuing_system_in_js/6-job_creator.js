#!/usr/bin/node
import { createQueue } from 'kue';

const queue = createQueue();
const jobData = { phoneNumber: '+2347748395037', message: 'Kindly verify your identification' };
const job = queue
  .create('push_notification_code', jobData)
  .save((err) => {
    if (!err) console.log(`Notification job created: ${job.id}`);
  });
job.on('failed', (err) => { 
  console.log('Notification job failed');
});
job.on('complete', (result) => { 
  console.log('Notification job completed');
});
