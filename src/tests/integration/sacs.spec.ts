import buscarUsuariosSACS from '../../services/buscarUsuariosSACS';

describe('Integração - Api SACS', () => {
  test('Deve ser possível buscar os dados do SACS', async () => {
    jest.setTimeout(30000); // aumentando o timeout apenas para esse teste

    const data = await buscarUsuariosSACS();

    expect(data).not.toBeNull();

    expect(data.length).not.toBeNull();
  });
});
