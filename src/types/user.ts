import { WhiteHouseResponseType } from './common';

export interface UserType {
  name: string;
  email: string;
  username: string;
}
export interface AuthenticationType {
  token: string | null;
  user: UserType | undefined;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

export interface GetProfileResponseType extends WhiteHouseResponseType {
  results: UserType;
}
