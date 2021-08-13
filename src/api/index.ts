import axios from 'axios';
import jwt from 'jsonwebtoken';

const mapaDaSaudeToken = jwt.sign(
  { pk: process.env.MAPAS_PUBLIC_KEY, tm: Date.now() },
  process.env.MAPAS_PRIVATE_KEY
);

const apiMapasSaude = axios.create({
  baseURL: process.env.MAPAS_URL,
  headers: {
    authorization: mapaDaSaudeToken,
    'MapasSDK-REQUEST': 'true',
  },
});

const apiSACS = axios.create({
  baseURL: process.env.SACS_URL,
  headers: {
    Authorization: process.env.SACS_JWT,
  },
});

const apiSAGU = axios.create({
  baseURL: process.env.MAPAS_URL,
  headers: {
    authorization: process.env.MAPAS_JWT,
    'MapasSDK-REQUEST': 'true',
  },
});

export { apiMapasSaude, apiSACS, apiSAGU };
