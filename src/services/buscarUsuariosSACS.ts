import { apiSACS } from '../api';
import { UsuarioSACS } from '../controllers/types';

const buscarUsuariosSACS = async () => {
  try {
    const { data } = await apiSACS.get('/sacs-api');

    return data as UsuarioSACS[];  
  } catch (error) {
    throw new Error('Error: BuscarUsuariosSACS');
  }
};

export default buscarUsuariosSACS;
