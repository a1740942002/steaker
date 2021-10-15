import axios from 'axios';
import NProgress from 'nprogress';

export const coinApi = axios.create({
  baseURL: `https://api.coingecko.com/api/v3/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

coinApi.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

coinApi.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);
