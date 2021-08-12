import buscarDescribeAgentesMapasDaSaude from '../../services/buscarDescribeAgentesMapasDaSaude';
import criarAgentesMapasDaSaude, {
  AgenteMapasDaSaude,
} from '../../services/criarAgentesMapasDaSaude';
import { v4 as uuid } from 'uuid';

describe('Integração - Api Mapas da Saúde', () => {
  test('Deve ser possível buscar o describe de agent', async () => {
    const data = await buscarDescribeAgentesMapasDaSaude();

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();
  });

  test('Deve ser possível criar um agent', async () => {
    // Agente para teste
    const agente: AgenteMapasDaSaude = {
      name: `Teste.${uuid()}`,
    };

    const data = await criarAgentesMapasDaSaude(agente);

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();

    expect(data.name).toBe(agente.name);
  });
});
