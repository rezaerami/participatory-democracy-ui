import React from 'react';
import styled from 'styled-components';
import { Col, Row, RowProps, ColProps } from 'antd';

export const StyledArticlesGridWrapper = styled.section``;

export const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 3rem;
  font-size: 3rem;
  margin-bottom: 0;
`;
export const StyledSpan = styled.span`
  position: relative;
  &:before,
  &:after {
    content: '';
    height: 0.2rem;
    background-color: var(--lightGray);
    width: 10rem;
    position: absolute;
    top: 50%;
  }
  &:before {
    right: -2rem;
    transform: translate(100%, -50%);
  }
  &:after {
    left: -2rem;
    transform: translate(-100%, -50%);
  }
`;

export const StyledRow: React.FC<RowProps> = styled(Row)``;

export const StyledCol: React.FC<ColProps> = styled(Col)`
  padding: 3rem;
`;
