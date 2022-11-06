import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';

import GlobalStyles from 'components/styles';

import { StyledAppWrapper } from './styles';

interface AppPropTypes {
  className?: string;
}

const App: React.FC<AppPropTypes> = ({ className }: AppPropTypes) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledAppWrapper className={className}>
        this is app content
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;
