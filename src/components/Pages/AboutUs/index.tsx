import React from 'react';

import { StyledAboutUsWrapper } from './styles';

export interface AboutUsTypes {
  className?: string;
}

const AboutUs: React.FC<AboutUsTypes> = ({ className }: AboutUsTypes) => (
  <StyledAboutUsWrapper className={className}>
    this is AboutUs
  </StyledAboutUsWrapper>
);

export default AboutUs;
