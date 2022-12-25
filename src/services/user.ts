import createAxios from 'config/axios';
import { ENDPOINTS } from 'constants/endpoints';

export const getProfile = (): Promise<any> =>
  createAxios({ authenticate: true })(ENDPOINTS.USERS.PROFILE());
