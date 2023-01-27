import createAxios from 'config/axios';
import { ENDPOINTS } from 'constants/endpoints';
import { AxiosResponse } from 'axios';
import { GetProfileResponseType } from 'types/user';
import { TopicsResponseType } from 'types/topic';

export const getProfile = (): Promise<AxiosResponse<GetProfileResponseType>> =>
  createAxios({ authenticate: true })(ENDPOINTS.USERS.PROFILE());

export const getTopics = (): Promise<AxiosResponse<TopicsResponseType>> =>
  createAxios({ authenticate: true })(ENDPOINTS.USERS.TOPICS());
