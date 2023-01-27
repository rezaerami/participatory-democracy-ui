import { TopicItemParamsType } from 'types/topic';
import { SsoRedirectParamsType } from 'types/auth';

export const ENDPOINTS = {
  AUTH: {
    SSO_REDIRECT: ({ service }: SsoRedirectParamsType) =>
      `/auth/sso-redirect/${service}`,
    REFRESH_TOKEN: () => '/auth/refresh-token',
    LOGOUT: () => '/auth/logout',
  },
  USERS: {
    PROFILE: () => '/users/profile',
    TOPICS: () => '/users/topics',
  },
  TOPICS: {
    LIST: () => '/topics',
    ITEM: ({ topicCode }: TopicItemParamsType) => `/topics/${topicCode}`,
  },
  CONTENTFUL: {
    GRAPHQL: () =>
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}`,
  },
};
