import { ROUTES } from '../constants/routes';

export const getPathByTypename = (typename: string): string => {
  const lookup: { [key: string]: string } = {
    PageCategory: ROUTES.CATEGORY_DETAILS,
    PageArticle: ROUTES.ARTICLE_DETAILS,
  };

  return lookup?.[typename] || typename;
};

export const isExternalUrl = (url: string): boolean => /^http/.test(url);
