import axios from 'axios';
import { Envs } from '../utils/envs';

const baseURL = Envs.BASE_URL;

const request = axios.create({
  baseURL,
  timeout: 20000, // 20s timeout
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(async (config) => {
  return {
    ...config,
    params: {
      ...config.params,
    },
  };
});

export default request;
