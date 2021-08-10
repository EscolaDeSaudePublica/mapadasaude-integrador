import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost',
  headers: {
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwayI6InNySFVpUm9pSUpqRmxqMWdMelB5MnNUMnNLdW1EbUlZIn0.u7LqWvT1QbrhIaiDBWK8Lwg36KflAZFEEwb3GWbX8es',
    'MapasSDK-REQUEST': 'true',
  },
});

export default api;
