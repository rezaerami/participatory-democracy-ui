import { createContext } from 'react';

import { AuthenticationType } from 'types/user';

const defaultValues: AuthenticationType = {
  user: null,
  token: null,
  isLoggedIn: false,
};
const GlobalContext = createContext(defaultValues);
const { Provider: GlobalContextProvider, Consumer: GlobalContextConsumer } =
  GlobalContext;

export { GlobalContextProvider, GlobalContextConsumer, GlobalContext };
