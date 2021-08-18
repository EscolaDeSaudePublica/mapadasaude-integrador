import buscaAgenteMapasDaSaude from '../services/buscaAgenteMapasDaSaude';
import buscarUsuariosSACS from '../services/buscarUsuariosSACS';
import criarAgenteMapasDaSaude from '../services/criarAgenteMapasDaSaude';
import editarAgenteMapasDaSaude from '../services/editarAgenteMapasDaSaude';
import Controller from './Controller';

// apenas testes ainda
class SACSController extends Controller {
  async exec() {
    try {
      const sacsUsers = await buscarUsuariosSACS();

      // Testando com poucos
      for (let index = 0; index < sacsUsers.length; index++) {
        const agente = sacsUsers[index];

        const aux = await buscaAgenteMapasDaSaude(agente.email);

        if (aux) {
          editarAgenteMapasDaSaude(aux.id, {
            name: agente.nome,
            documento: agente.cpf,
            emailPublico: agente.email,
          });
        } else {
          criarAgenteMapasDaSaude({
            name: agente.nome,
            documento: agente.cpf,
            emailPublico: agente.email,
          });
        }
      }
    } catch (error) {
      throw new Error('SACSController');
    }
  }
}

export default SACSController;
