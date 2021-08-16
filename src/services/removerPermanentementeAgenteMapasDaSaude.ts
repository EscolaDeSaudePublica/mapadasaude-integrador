import { apiMapasSaude } from '../api';

const removerPermanentementeAgenteMapasDaSaude = async (agenteId: number) => {
  try {
    const { status } = await apiMapasSaude.get(`/agentes/destroy/${agenteId}`);

    return status;
  } catch (error) {
    return;
  }
};

export default removerPermanentementeAgenteMapasDaSaude;
