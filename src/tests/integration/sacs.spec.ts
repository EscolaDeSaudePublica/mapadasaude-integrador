import buscarUsuariosSACS from '../../services/buscarUsuariosSACS';

describe('Integração - Api SACS', () => {
  test('Deve ser possível criar um agent', async () => {
    const data = await buscarUsuariosSACS();

    expect(data).not.toBeNull();

    expect(data.length).not.toBeNull();
  });
});
