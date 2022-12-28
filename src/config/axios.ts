import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { ENDPOINTS } from 'constants/endpoints';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export interface CreateAxiosDefaultsOverwrite extends CreateAxiosDefaults {
  authenticate?: boolean;
}
const createAxios = (config: CreateAxiosDefaultsOverwrite): AxiosInstance => {
  const token = localStorage.getItem('token');
  if (config.authenticate) {
    if (!config.headers) {
      config.headers = {};
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    config.headers.Authorization = `Bearer ${token ?? ''}`;
  }

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    ...config,
  });

  instance.interceptors.response.use(
    (value) => value,
    async (error) => {
      const originalRequest = error.config;
      if (error?.response?.data?.code === 401 && token) {
        try {
          const { data } = await axios.post(ENDPOINTS.AUTH.REFRESH_TOKEN(), {
            token,
          });
          localStorage.setItem('token', data.results.token);

          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          originalRequest.headers.Authorization = `Bearer ${data.results.token}`;
          return await instance(originalRequest);
        } catch (e) {
          localStorage.removeItem('token');
        }
      }
    },
  );

  return instance;
};

export default createAxios;
