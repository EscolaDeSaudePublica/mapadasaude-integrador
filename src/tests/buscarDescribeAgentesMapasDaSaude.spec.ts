import buscarDescribeAgentesMapasDaSaude from '../services/buscarDescribeAgentesMapasDaSaude';

test('Buscando o describe de agent na API do Mapa da Saúde', async () => {
  const data = await buscarDescribeAgentesMapasDaSaude();

  expect(data).not.toBeNull();
  expect(data.id).not.toBeNull();
  expect(data.name).not.toBeNull();
});
