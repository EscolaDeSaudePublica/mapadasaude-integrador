import dotenv from 'dotenv';
import { apiMapasSaude } from './api';

dotenv.config();

const describeAgente = async () => {
  const response = await apiMapasSaude.get('/api/agent/describe');
  console.log(response);
};

const findAgentesMapasSaude = async () => {
  const response = await apiMapasSaude.get('/api/agent/find');
  console.log(response);
};

describeAgente();
findAgentesMapasSaude();
