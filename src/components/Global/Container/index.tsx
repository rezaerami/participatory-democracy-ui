import React from 'react';
import { StyledContainer } from './styles';

export interface ContainerTypes {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerTypes> = ({
  className,
  children,
}: ContainerTypes) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
