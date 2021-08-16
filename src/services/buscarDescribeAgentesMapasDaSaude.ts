import { apiMapasSaude } from '../api';

const buscarDescribeAgentesMapasDaSaude = async () => {
  try {
    const { data } = await apiMapasSaude.get('/api/agent/describe');

    return data;  
  } catch (error) {
    throw new Error('Error: BuscarDescribeAgentesMapasDaSaude');
  }
  
  
};

export default buscarDescribeAgentesMapasDaSaude;
