export interface UserType {
  name: string;
  email: string;
  username: string;
}
export interface AuthenticationType {
  token: string | null;
  user: UserType | null;
  isLoggedIn: boolean;
}
