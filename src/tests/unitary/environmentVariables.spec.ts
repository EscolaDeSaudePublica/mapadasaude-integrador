describe('Unitário - Variáveis de ambiente', () => {
  test('Deve ser possível acessar as variáveis de ambiente da api do Mapas da Saúde', async () => {
    expect(process.env.MAPAS_URL).not.toBeNull();
    expect(process.env.MAPAS_JWT).not.toBeNull();
  });
});