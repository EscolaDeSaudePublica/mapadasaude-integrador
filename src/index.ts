import { apiMapasSaude } from './api';
import FormData from 'form-data';
import cron from 'node-cron';
import SACSController from './controllers/SACSController';
import Controller from './controllers/Controller';

const sacsController: Controller = new SACSController({
  name: 'SACSController',
});

const describeAgente = async () => {
  try {
    const response = await apiMapasSaude.get('/api/agent/describe');
    console.log(response);
  } catch (error) {
    console.log('algo de errado aconteceu');
  }
};

const createAgentesMapasSaude = async () => {
  try {
    const agenteFromData = new FormData();
    agenteFromData.append('name', 'Teste'.concat(String(Date.now())));
    agenteFromData.append('type', '2');
    const response = await apiMapasSaude.post('/agent/index', agenteFromData, {
      headers: agenteFromData.getHeaders(),
    });
    console.log(response);
  } catch (error) {
    console.log('algo de errado aconteceu');
  }
};

// testando
cron.schedule('* * * * *', describeAgente);
cron.schedule('* * * * *', sacsController.exec);
cron.schedule('* * * * *', createAgentesMapasSaude);

cron.schedule('0 0 * * * *', () => console.log('Diariamente a meia noite'));
