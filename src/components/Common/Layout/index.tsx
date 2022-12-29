import React from 'react';

import { Header, Footer } from './partials';
import { StyledLayoutWrapper, StyledContentWrapper } from './styles';

export interface LayoutTypes {
  className?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutTypes> = ({
  className,
  children,
}: LayoutTypes) => (
  <StyledLayoutWrapper className={className}>
    <Header />
    <StyledContentWrapper>{children}</StyledContentWrapper>
    <Footer />
  </StyledLayoutWrapper>
);

export default Layout;
