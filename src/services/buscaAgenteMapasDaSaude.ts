import { apiMapasSaude } from '../api';

const buscaAgenteMapasDaSaude = async (id: number) => {
  const { data } = await apiMapasSaude.get(`/api/agent/findOne?@select=id,name,documento&id=EQ(${id})`);

  return data;
};

export default buscaAgenteMapasDaSaude;