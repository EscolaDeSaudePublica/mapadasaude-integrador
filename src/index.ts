import dotenv from 'dotenv';
dotenv.config(); // necessário aqui

import { apiMapasSaude } from './api';
import FormData from 'form-data';

const describeAgente = async () => {
  const response = await apiMapasSaude.get('/api/agent/describe');
  console.log(response);
};

const findAgentesMapasSaude = async () => {
  const response = await apiMapasSaude.get('/api/agent/find');
  console.log(response);
};

const createAgentesMapasSaude = async () => {
  const agenteFromData = new FormData();
  agenteFromData.append('name', 'Teste'.concat(String(Date.now())));
  agenteFromData.append('type', '2');
  const response = await apiMapasSaude.post('/agent/index', agenteFromData, {
    headers: agenteFromData.getHeaders(),
  });
  console.log(response);
};

describeAgente();
findAgentesMapasSaude();
createAgentesMapasSaude();
