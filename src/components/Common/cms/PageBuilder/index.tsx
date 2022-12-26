import React from 'react';

import {
  ComponentPageBuilder,
  ComponentRow,
} from 'cms/graphql/types.generated';

import { StyledPageBuilder } from './styles';
import Row from '../Row';

export interface PageBuilderTypes {
  className?: string;
  pageBuilder?: ComponentPageBuilder | null;
}

const PageBuilder: React.FC<PageBuilderTypes> = ({
  className,
  pageBuilder,
}: PageBuilderTypes) => (
  <StyledPageBuilder className={className}>
    {pageBuilder?.rowsCollection?.items?.map((row) => (
      <Row key={row?.sys?.id} id={row?.sys?.id} />
    ))}
  </StyledPageBuilder>
);

export default PageBuilder;
