import React from 'react';
import styled from 'styled-components';
import { Col, Row, RowProps, ColProps } from 'antd';

export const StyledCardsGridWrapper = styled.section``;

export const StyledRow: React.FC<RowProps> = styled(Row)``;

export const StyledCol: React.FC<ColProps> = styled(Col)`
  padding: 2rem;
`;
