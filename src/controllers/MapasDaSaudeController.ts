import buscarDescribeAgentesMapasDaSaude from '../services/buscarDescribeAgentesMapasDaSaude';
import Controller from './Controller';

class MapasDaSaudeController extends Controller {
  async exec() {
    try {
      const data = buscarDescribeAgentesMapasDaSaude();
      console.log(data);
    } catch (error) {
      console.log('Error: MapasDaSaudeController');
    }
  }
}

export default MapasDaSaudeController;
