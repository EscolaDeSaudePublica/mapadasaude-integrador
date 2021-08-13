import { apiMapasSaude } from '../api';

const buscaAgenteMapasDaSaude = async (id: number) => {
  const { data } = await apiMapasSaude.get('/api/agent/findOne', {
    params: {
      id: `EQ(${id})`,
      '@select': 'id,name,documento',
    },
  });

  return data;
};

export default buscaAgenteMapasDaSaude;
