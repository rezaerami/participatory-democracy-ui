import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';

export const navItems = [
  {
    label: MESSAGES.HOME,
    path: ROUTES.HOME,
  },
  {
    label: MESSAGES.ARTICLES,
    path: ROUTES.ARTICLES,
  },
  {
    label: MESSAGES.ABOUT_US,
    path: ROUTES.ABOUT_US,
  },
];

export const userMenu = [
  {
    label: MESSAGES.LOGOUT,
    path: ROUTES.LOGOUT,
  },
];

export const guestMenu = [
  {
    label: MESSAGES.LOGIN,
    path: ROUTES.LOGIN,
  },
];
