import { createContext } from 'react';

import { AuthenticationType } from 'types/user';

const defaultValues: AuthenticationType = {
  user: undefined,
  token: null,
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogout: () => {},
};
const GlobalContext = createContext(defaultValues);
const { Provider: GlobalContextProvider, Consumer: GlobalContextConsumer } =
  GlobalContext;

export { GlobalContextProvider, GlobalContextConsumer, GlobalContext };
