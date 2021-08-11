import { apiMapasSaude } from '../api';

const buscarDescribeAgentesMapasDaSaude = async () => {
  const { data } = await apiMapasSaude.get('/api/agent/describe');

  return data;
};

export default buscarDescribeAgentesMapasDaSaude;
