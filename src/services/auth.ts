import createAxios from 'config/axios';
import { ENDPOINTS } from 'constants/endpoints';

export const logout = (): Promise<any> =>
  createAxios({ authenticate: true })(ENDPOINTS.AUTH.LOGOUT());
