import { apiMapasSaude } from '../api';

interface BuscaAgenteMapasDaSaudeData {
  id: number;
  name: string;
  emailPublico: string;
}

/**
 * Busca um a gente no Mapas da Saúde pelo id e email
 * @param id Id do Agente
 * @param emailPublico Email público do agente
 * @returns
 */
const buscaAgenteMapasDaSaude = async (emailPublico: string) => {
  try {
    const { data } = await apiMapasSaude.get('/api/agent/findOne', {
      params: {
        '@select': 'id,name,emailPublico',
        emailPublico: `EQ(${emailPublico})`,
      },
    });

    return data as BuscaAgenteMapasDaSaudeData;
  } catch (error) {
    throw new Error('Error: BuscaAgenteMapasDaSaude');
  }
};

export default buscaAgenteMapasDaSaude;
