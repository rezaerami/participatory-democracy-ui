import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';

import { usePageCategoriesOverviewQuery } from 'cms/graphql/queries/pageCategoriesOverview.generated';
import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { getPathByTypename } from 'utils/utlUtils';
import { CardsGrid, Breadcrumb, Container } from 'components/Global';
import { CardContentTypes } from 'components/Global/Card';

import { StyledCategoriesWrapper } from './styles';

export interface CategoriesTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.CATEGORIES },
];

const Categories: React.FC<CategoriesTypes> = ({
  className,
}: CategoriesTypes) => {
  const limit = 100;
  const [skip] = useState(0);
  const { data } = usePageCategoriesOverviewQuery({
    limit,
    skip,
  });

  const categories: CardContentTypes[] =
    data?.pageCategoryCollection?.items?.map(
      (category): CardContentTypes => ({
        title: category?.title ?? '',
        description: category?.subtitle ?? '',
        image: category?.thumbnail?.url ?? '',
        link: generatePath(getPathByTypename(category?.__typename ?? ''), {
          slug: category?.slug ?? '',
        }),
      }),
    ) ?? [];

  return (
    <StyledCategoriesWrapper className={className}>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      <Container>
        <CardsGrid items={categories} />
      </Container>
    </StyledCategoriesWrapper>
  );
};
export default Categories;
