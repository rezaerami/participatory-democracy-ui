import React from 'react';

import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { ArticlesGrid, Breadcrumb, Container } from 'components/Global';

import { StyledArticlesWrapper } from './styles';
import mocks from './mock.json';

export interface ArticlesTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.ARTICLES },
];

const Articles: React.FC<ArticlesTypes> = ({ className }: ArticlesTypes) => (
  <StyledArticlesWrapper className={className}>
    <Breadcrumb items={breadcrumbItems} />
    <Container>
      <ArticlesGrid items={mocks.results} />
    </Container>
  </StyledArticlesWrapper>
);

export default Articles;
