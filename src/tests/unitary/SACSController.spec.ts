import SACSController from '../../controllers/SACSController';

describe('Rotina - SACS', () => {
  test('Deve ser possível executar a rotina de cadastramento dos dados do SACS no Mapas da Saúde', async () => {
    const controller = new SACSController({ name: 'SACSController' });
    controller.exec();
  });
});
