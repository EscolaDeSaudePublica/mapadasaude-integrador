import buscarDescribeAgentesMapasDaSaude from '../../services/buscarDescribeAgentesMapasDaSaude';
import criarAgentesMapasDaSaude from '../../services/criarAgentesMapasDaSaude';

describe('Integração - Api Mapas da Saúde', () => {
  test('Deve ser possível buscar o describe de agent', async () => {
    const data = await buscarDescribeAgentesMapasDaSaude();

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();
  });

  test('Deve ser possível criar um agent', async () => {
    const data = await criarAgentesMapasDaSaude();

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();
  });

  test('Deve ser possível deletar um agent', async () => {
    // TODO: implementar
  });
});
