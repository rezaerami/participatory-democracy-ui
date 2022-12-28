import React, { useState } from 'react';

import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { ArticlesGrid, Breadcrumb, Container } from 'components/Global';

import { StyledArticlesWrapper } from './styles';
import mocks from './mock.json';
import { usePageArticlesOverviewQuery } from '../../../cms/graphql/queries/pageArticlesOverview.generated';
import { CardContentTypes } from '../../Global/Card';
import { getPathByTypename } from '../../../utils/utlUtils';
import { generatePath } from 'react-router-dom';

export interface ArticlesTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.ARTICLES },
];

const Articles: React.FC<ArticlesTypes> = ({ className }: ArticlesTypes) => {
  const limit = 100;
  const [skip] = useState(0);
  const { data } = usePageArticlesOverviewQuery({
    limit,
    skip,
  });

  const articles: CardContentTypes[] =
    data?.pageArticleCollection?.items?.map(
      (article): CardContentTypes => ({
        title: article?.title ?? '',
        description: article?.subtitle ?? '',
        image: article?.thumbnail?.url ?? '',
        link: generatePath(getPathByTypename(article?.__typename ?? ''), {
          slug: article?.slug ?? '',
        }),
      }),
    ) ?? [];

  return (
    <StyledArticlesWrapper className={className}>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      <Container>
          <ArticlesGrid items={articles} />
      </Container>
    </StyledArticlesWrapper>
  );
};
export default Articles;
