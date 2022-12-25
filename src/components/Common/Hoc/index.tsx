import React from 'react';
import { GlobalContextProvider } from './context';
import { useAuthenticate } from 'hooks/useAuthenticate';

interface HocPropTypes {
  children: React.ReactNode;
}

const Hoc: React.FC<HocPropTypes> = ({ children }: HocPropTypes) => {
  const authenticate = useAuthenticate();

  return (
    <GlobalContextProvider value={{ ...authenticate }}>
      {children}
    </GlobalContextProvider>
  );
};

export default Hoc;
