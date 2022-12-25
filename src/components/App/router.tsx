import React from 'react';
import { Home, AboutUs, Articles, ArticleDetails } from 'components/Pages';
import { ROUTES } from 'constants/routes';

export const ROUTER = [
  {
    path: ROUTES.ABOUT_US,
    exact: true,
    element: <AboutUs />,
  },
  {
    path: ROUTES.ARTICLES,
    exact: true,
    element: <Articles />,
  },
  {
    path: ROUTES.ARTICLE_DETAILS,
    exact: true,
    element: <ArticleDetails />,
  },
  {
    path: ROUTES.HOME,
    exact: true,
    element: <Home />,
  },
];
