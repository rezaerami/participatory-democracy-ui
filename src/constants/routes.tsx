import { ENDPOINTS } from './endpoints';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? '';

export const ROUTES = {
  HOME: '/',
  ABOUT_US: '/about-us',
  ARTICLES: '/articles',
  ARTICLE_DETAILS: '/articles/:slug',
  CATEGORIES: '/categories',
  CATEGORY_DETAILS: '/categories/:slug',

  LOGIN_VIA_GOOGLE: `${API_BASE_URL}${ENDPOINTS.AUTH.SSO_REDIRECT({
    service: 'google',
  })}`,
  LOGOUT: `${API_BASE_URL}${ENDPOINTS.AUTH.LOGOUT()}`,
};
