import buscaAgenteMapasDaSaude from '../services/buscaAgenteMapasDaSaude';
import buscarUsuariosSACS from '../services/buscarUsuariosSACS';
import criarAgenteMapasDaSaude from '../services/criarAgenteMapasDaSaude';
import Controller from './Controller';

// apenas testes ainda
class SACSController extends Controller {
  async exec() {
    try {
      const data = await buscarUsuariosSACS();

      // Testando com poucos
      for (let index = 0; index < 10; index++) {
        const agente = data[index];

        const aux = await buscaAgenteMapasDaSaude(agente.email);

        /*
         * TODO: fazer verificação se o agente já existe
         * Se existir, atualizar, caso contrário, criar um novo
         */
        if (aux) {
          criarAgenteMapasDaSaude({
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
