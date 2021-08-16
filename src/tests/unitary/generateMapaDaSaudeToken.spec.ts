import { generateMapaDaSaudeToken } from '../../api';

describe('Autenticação Mapas da Saúde', () => {
  test('Deve ser possível gerar uma JWT do Mapas da Saúde', async () => {
    const token = generateMapaDaSaudeToken();

    console.log(token);

    expect(token).not.toBeNull();
  });
});
