import dotenv from 'dotenv';

// Necessário no início
dotenv.config();

import cron from 'node-cron';
import Controller from './controllers/Controller';
import SACSController from './controllers/SACSController';
import SAGUController from './controllers/SAGUController';

const controllers: Controller[] = [
  new SACSController({
    name: 'SACSController',
  }),
  new SAGUController({
    name: 'SAGUController',
  }),
];

// Execulta cada rotina dos controladores meia noite de cada dia
controllers.forEach((controller) => {
  cron.schedule('0 0 * * * *', () => {
    console.log(`Init exec: ${controller.config.name}`);

    controller.exec();

    console.log(`Done exec: ${controller.config.name}`);
  });
});

console.log('🔥 is alive 🔥');
