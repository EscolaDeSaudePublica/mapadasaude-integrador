import FormData from 'form-data';
import { apiMapasSaude } from '../api';
import { AgenteMapasDaSaude } from '../controllers/types';

const criarAgenteMapasDaSaude = async (agente: AgenteMapasDaSaude) => {
  try {
    const agenteFromData = new FormData();

    // Criando o FormData
    agenteFromData.append('name', agente.name);
    agenteFromData.append('documento', agente.documento);
    agenteFromData.append('emailPublico', agente.emailPublico);

    // 🔥 Diferenciado 🔥
    agenteFromData.append('type', String(1));

    const { data } = await apiMapasSaude.post('/agent/index', agenteFromData, {
      headers: agenteFromData.getHeaders(),
    });

    return data;
  } catch (error) {
    throw new Error('Erro: criarAgenteMapasDaSaude');
  }
};

export default criarAgenteMapasDaSaude;
