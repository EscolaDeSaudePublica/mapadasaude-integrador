import api from './api';

const testeApi = async () => {
  const response = await api.post('/api/agent/describe');
  console.log(response);
};

testeApi();
