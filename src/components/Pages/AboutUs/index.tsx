import React from 'react';

import { StyledAboutUsWrapper } from './styles';

export interface AboutUsTypes {
  className?: string;
}

const AboutUs: React.FC<AboutUsTypes> = ({ className }: AboutUsTypes) => {
  console.log("about us mounted")
  return (
      <StyledAboutUsWrapper className={className}>this is AboutUs</StyledAboutUsWrapper>
  )
};

export default AboutUs;
