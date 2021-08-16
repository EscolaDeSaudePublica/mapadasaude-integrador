import dotenv from 'dotenv';

// Necessário no início
dotenv.config();

import cron from 'node-cron';
import Controller from './controllers/Controller';
import MapasDaSaudeController from './controllers/MapasDaSaudeController';
import SACSController from './controllers/SACSController';

const controllers: Controller[] = [
  new SACSController({
    name: 'SACSController',
  }),
  new MapasDaSaudeController({
    name: 'MapasDaSaudeController',
  }),
];

// Execulta cada rotina dos controladores meia noite de cada dia
controllers.forEach((controller) => {
  console.log(`Init: ${controller.config.name}`);

  cron.schedule('0 0 * * * *', controller.exec);

  console.log(`Done: ${controller.config.name}`);
});

console.log('🔥 is alive 🔥');
