import React from 'react';
import { generatePath, useParams } from 'react-router-dom';

import { usePageCategoryQuery } from 'cms/graphql/queries/pageCategory.generated';
import { ComponentPageBuilder } from 'cms/graphql/types.generated';
import { PageBuilder } from 'components/Common';
import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { Breadcrumb, CardsGrid } from 'components/Global';
import { CardContentTypes } from 'components/Global/Card';
import { getPathByTypename } from 'utils/utlUtils';

import { StyledCategoriesWrapper, StyledContainer } from './styles';

export interface CategoriesTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.CATEGORIES, link: ROUTES.CATEGORIES },
];

const CategoryDetails: React.FC<CategoriesTypes> = ({
  className,
}: CategoriesTypes) => {
  const { slug = '' } = useParams();

  const { data } = usePageCategoryQuery({ slug }, { enabled: !!slug });
  const category = data?.pageCategoryCollection?.items?.[0];

  const articles: CardContentTypes[] =
    category?.linkedFrom?.pageArticleCollection?.items?.map(
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
    <StyledCategoriesWrapper className={className}>
      <StyledContainer>
        <Breadcrumb
          items={[...breadcrumbItems, { title: category?.title ?? '' }]}
        />
      </StyledContainer>
      <PageBuilder
        pageBuilder={category?.pageBuilder as ComponentPageBuilder}
      />
      <StyledContainer>
        <CardsGrid items={articles} />
      </StyledContainer>
    </StyledCategoriesWrapper>
  );
};

export default CategoryDetails;
