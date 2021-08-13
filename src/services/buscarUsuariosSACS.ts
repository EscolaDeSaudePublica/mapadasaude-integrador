import { apiSACS } from '../api';
import { UsuarioSACS } from '../controllers/types';

const buscarUsuariosSACS = async () => {
  const { data } = await apiSACS.get('/sacs-api');

  return data as UsuarioSACS[];
};

export default buscarUsuariosSACS;
