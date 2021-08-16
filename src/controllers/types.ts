interface AgenteMapasDaSaude {
  name: string;
  documento: string; // CPF
  emailPublico: string;
}

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

export { AgenteMapasDaSaude, UsuarioSACS };
