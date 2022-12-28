import React, { useEffect } from 'react';
import { GlobalContextProvider } from './context';
import { useRedirect, useAuthenticate } from 'hooks';

interface HocPropTypes {
  children: React.ReactNode;
}

const Hoc: React.FC<HocPropTypes> = ({ children }: HocPropTypes) => {
  const authenticate = useAuthenticate();
  const { checkRedirection } = useRedirect();

  useEffect(() => {
    checkRedirection();
  }, []);

  return (
    <GlobalContextProvider value={{ ...authenticate }}>
      {children}
    </GlobalContextProvider>
  );
};

export default Hoc;
