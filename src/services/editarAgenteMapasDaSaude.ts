import FormData from 'form-data';
import { apiMapasSaude } from '../api';
import { AgenteMapasDaSaude } from '../controllers/types';

const editarAgenteMapasDaSaude = async (
  agenteId: number,
  agente: AgenteMapasDaSaude
) => {
  try {
    const agenteFromData = new FormData();

    // Criando o FormData
    agenteFromData.append('name', agente.name);
    agenteFromData.append('documento', agente.documento);
    agenteFromData.append('emailPublico', agente.emailPublico);

    const { data } = await apiMapasSaude.post(
      `/agent/single/${agenteId}`,
      agenteFromData,
      {
        headers: agenteFromData.getHeaders(),
      }
    );

    return data;
  } catch (error) {
    // throw new Error('Error: EditarAgenteMapasDaSaude');
  }
};

export default editarAgenteMapasDaSaude;
