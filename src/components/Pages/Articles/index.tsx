import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';

import { usePageArticlesOverviewQuery } from 'cms/graphql/queries/pageArticlesOverview.generated';
import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { getPathByTypename } from 'utils/utlUtils';
import { CardsGrid, Breadcrumb, Container } from 'components/Global';
import { CardContentTypes } from 'components/Global/Card';

import { StyledArticlesWrapper } from './styles';

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
        <CardsGrid items={articles} />
      </Container>
    </StyledArticlesWrapper>
  );
};
export default Articles;
