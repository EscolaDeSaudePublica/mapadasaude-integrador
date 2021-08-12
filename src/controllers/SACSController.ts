import buscarUsuariosSACS from '../services/buscarUsuariosSACS';
import criarAgenteMapasDaSaude from '../services/criarAgentesMapasDaSaude';
import Controller from './Controller';

// apenas testes ainda
class SACSController extends Controller {
  async exec() {
    try {
      const data = await buscarUsuariosSACS();

      // Testando com poucos
      for (let index = 0; index < 10; index++) {
        const agente = data[index];

        /*
         * TODO: fazer verificação se o agente já existe
         * Se existir, atualizar, caso contrário, criar um novo
         */

        criarAgenteMapasDaSaude({
          name: agente.nome,
          documento: agente.cpf,
        });
      }
    } catch (error) {
      throw new Error('SACSController');
    }
  }
}

export default SACSController;
