import { AxiosResponse } from 'axios';
import createAxios from 'config/axios';
import { ENDPOINTS } from 'constants/endpoints';
import { PaginationType } from 'types/common';
import {
  TopicCreateDataType,
  TopicItemParamsType,
  TopicResponseType,
  TopicsResponseType,
  TopicUpdateDataType,
} from 'types/topic';
import { camelToSnakeCaseKeys, createFormData } from 'utils/objectUtils';

export const getTopics = (
  params: PaginationType,
): Promise<AxiosResponse<TopicsResponseType>> =>
  createAxios({ authenticate: false, params })(ENDPOINTS.TOPICS.LIST());

export const getTopic = (
  params: TopicItemParamsType,
): Promise<AxiosResponse<TopicResponseType>> =>
  createAxios({ authenticate: false })(ENDPOINTS.TOPICS.ITEM(params));

export const createTopic = (
  data: TopicCreateDataType,
): Promise<AxiosResponse<TopicResponseType>> =>
  createAxios({
    authenticate: true,
  }).post(ENDPOINTS.TOPICS.LIST(), createFormData(camelToSnakeCaseKeys(data)), {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

export const updateTopic = ({
  topicCode,
  ...rest
}: TopicUpdateDataType): Promise<AxiosResponse<TopicResponseType>> =>
  createAxios({
    authenticate: true,
  }).post(
    ENDPOINTS.TOPICS.ITEM({ topicCode }),
    createFormData(camelToSnakeCaseKeys(rest)),
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );

export const deleteTopic = (
  params: TopicItemParamsType,
): Promise<AxiosResponse<TopicResponseType>> =>
  createAxios({ authenticate: false })(ENDPOINTS.TOPICS.ITEM(params));
