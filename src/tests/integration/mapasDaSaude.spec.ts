import buscarDescribeAgentesMapasDaSaude from '../../services/buscarDescribeAgentesMapasDaSaude';
import criarAgentesMapasDaSaude, {
  AgenteMapasDaSaude,
} from '../../services/criarAgenteMapasDaSaude';
import { v4 as uuid } from 'uuid';
import buscaAgenteMapasDaSaude from '../../services/buscaAgenteMapasDaSaude';

describe('Integração - Api Mapas da Saúde', () => {
  // Agente para teste
  const agente: AgenteMapasDaSaude = {
    name: `Teste.${uuid()}`,
    documento: '02973177332',
    emailPublico: 'email@email.com',
  };

  test('Deve ser possível buscar o describe da Entidade Agente', async () => {
    const data = await buscarDescribeAgentesMapasDaSaude();

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();
  });

  test('Deve ser possível criar um Agente', async () => {
    const data = await criarAgentesMapasDaSaude(agente);

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();

    expect(data.name).toBe(agente.name);
  });

  test('Deve ser possível buscar um Agente', async () => {
    const data = await buscaAgenteMapasDaSaude('email@email.com');

    expect(data).not.toBeNull();
  });
});
