import axios from 'axios';

const apiMapasSaude = axios.create({
  baseURL: 'http://localhost',
  headers: {
    authorization: process.env.MAPAS_JWT,
    'MapasSDK-REQUEST': 'true',
  },
});

export { apiMapasSaude };
