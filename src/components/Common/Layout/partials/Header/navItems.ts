import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';

export interface NavItemType {
  label: string;
  path?: string;
  onClick?: (e?: any) => void;
}

export const navItems: NavItemType[] = [
  {
    label: MESSAGES.HOME,
    path: ROUTES.HOME,
  },
  // {
  //   label: MESSAGES.ARTICLES,
  //   path: ROUTES.ARTICLES,
  // },
  // {
  //   label: MESSAGES.ABOUT_US,
  //   path: ROUTES.ABOUT_US,
  // },
];

export const userMenu: NavItemType[] = [
  {
    label: MESSAGES.MY_TOPICS,
    path: ROUTES.MY_TOPICS,
  },
  {
    label: MESSAGES.CREATE_NEW_TOPIC,
    path: ROUTES.CREATE_NEW_TOPIC,
  },
];

export const guestMenu: NavItemType[] = [
  {
    label: MESSAGES.LOGIN_VIA_GOOGLE,
    path: ROUTES.LOGIN_VIA_GOOGLE,
  },
];
