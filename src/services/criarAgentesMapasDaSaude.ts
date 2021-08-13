import { apiMapasSaude } from '../api';
import FormData from 'form-data';
import { v4 as uuid } from 'uuid';

const criarAgentesMapasDaSaude = async () => {
  const agenteFromData = new FormData();

  const user_id = uuid();

  // Criando o FormData
  agenteFromData.append('name', `Teste${user_id}`);
  agenteFromData.append('user_id', user_id);
  agenteFromData.append('type', '1');

  const { data } = await apiMapasSaude.post('/agent/index', agenteFromData, {
    headers: agenteFromData.getHeaders(),
  });

  return data;
};

export default criarAgentesMapasDaSaude;
