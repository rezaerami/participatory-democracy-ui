import React from 'react';

import MESSAGES from 'constants/messages';
import { StyledFooterWrapper } from './styles';
import Container from "components/Global/Container";

export interface FooterTypes {
  className?: string;
}

const Footer: React.FC<FooterTypes> = ({ className }: FooterTypes) => (
  <StyledFooterWrapper className={className}>
    <Container>
    {MESSAGES.COPYRIGHT}</Container>
  </StyledFooterWrapper>
);

export default Footer;
