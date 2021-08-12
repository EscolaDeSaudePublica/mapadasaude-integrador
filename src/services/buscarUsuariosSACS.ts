import { apiSACS } from '../api';

interface UsuarioSACS {
  codigo: number;
  cpf: string;
  rg: string;
  nome: string;
  cidade: string;
  estado: string;
  nmsexo: string;
  naturalidade: string;
  nacionalidade: string;
  datanascimento: string;
  telefone1: string;
  telefone2: string;
  email: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cep: string;
}

const buscarUsuariosSACS = async () => {
  const { data } = await apiSACS.get('/sacs-api');

  return data as UsuarioSACS[];
};

export default buscarUsuariosSACS;
