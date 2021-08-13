import { apiMapasSaude } from '../api';

const removerPermanentementeAgenteMapasDaSaude = async (agenteId: number) => {
  const { status } = await apiMapasSaude.get(`/agentes/destroy/${agenteId}`);

  return status;
};

export default removerPermanentementeAgenteMapasDaSaude;
