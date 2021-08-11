import { apiMapasSaude } from '../api';
import FormData from 'form-data';

const criarAgentesMapasDaSaude = async () => {
  const agenteFromData = new FormData();
  
  // Criando o FormData
  agenteFromData.append('name', 'Teste'.concat(String(Date.now())));
  agenteFromData.append('type', '2');
  
  const { data } = await apiMapasSaude.post('/agent/index', agenteFromData, {
    headers: agenteFromData.getHeaders(),
  });
  
  return data;
};

export default criarAgentesMapasDaSaude;
