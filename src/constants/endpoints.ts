export const ENDPOINTS = {
  AUTH: {
    SSO_REDIRECT: ({ service }: { service: string }) =>
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/auth/sso-redirect/${service}`,
    REFRESH_TOKEN: () => '/auth/refresh-token',
    LOGOUT: () => '/auth/logout',
  },
  USERS: {
    PROFILE: () => '/users/profile',
  },
  CONTENTFUL: {
    GRAPHQL: () =>
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}`,
  },
};
