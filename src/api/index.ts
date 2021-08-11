import axios from 'axios';

const apiMapasSaude = axios.create({
  baseURL: process.env.MAPAS_URL,
  headers: {
    authorization: process.env.MAPAS_JWT,
    'MapasSDK-REQUEST': 'true',
  },
});

export { apiMapasSaude };
