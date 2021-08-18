import { apiMapasSaude } from '../api';

const removerPermanentementeAgenteMapasDaSaude = async (agenteId: number) => {
  try {
    const { status } = await apiMapasSaude.get(`/agentes/destroy/${agenteId}`);

    return status;
  } catch (error) {
    // Essa rota já espera um erro 302
    return;
  }
};

export default removerPermanentementeAgenteMapasDaSaude;
