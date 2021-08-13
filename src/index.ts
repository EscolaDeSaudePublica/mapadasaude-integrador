import cron from 'node-cron';
import Controller from './controllers/Controller';
import MapasDaSaudeController from './controllers/MapasDaSaudeController';
import SACSController from './controllers/SACSController';

const sacsController: Controller = new SACSController({
  name: 'SACSController',
});

const mapasDaSaudeController: Controller = new MapasDaSaudeController({
  name: 'MapasDaSaudeController',
});

cron.schedule('* * * * *', mapasDaSaudeController.exec);
cron.schedule('* * * * *', sacsController.exec);

cron.schedule('0 0 * * * *', () => console.log('Diariamente a meia noite'));

console.log('🔥 is alive 🔥');
