import { apiMapasSaude } from '../api';
import Controller from './Controller';

class SACSController extends Controller {
  async exec() {
    try {
      const response = await apiMapasSaude.get('/api/agent/describe');
      console.log(response);
    } catch (error) {
      console.log('Error: SACSController');
    }
  }
}

export default SACSController;
