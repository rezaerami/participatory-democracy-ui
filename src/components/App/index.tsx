import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import theme from 'constants/theme';
import { queryClient } from 'config/reqctQuery';
import GlobalStyles from 'components/styles';
import { Layout, Hoc } from 'components/Common';

import { ROUTER } from './router';
import { StyledAppWrapper } from './styles';

interface AppPropTypes {
  className?: string;
}

const App: React.FC<AppPropTypes> = ({ className }: AppPropTypes) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <StyledAppWrapper className={className}>
        <BrowserRouter>
          <Hoc>
            <Layout>
              <Routes>
                {ROUTER.map((route) => (
                  <Route {...route} key={route.path} />
                ))}
              </Routes>
            </Layout>
          </Hoc>
        </BrowserRouter>
      </StyledAppWrapper>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
