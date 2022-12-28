import React from 'react';
import { useParams } from 'react-router-dom';

import { usePageArticleQuery } from 'cms/graphql/queries/pageArticle.generated';
import {ComponentPageBuilder, PageArticle} from 'cms/graphql/types.generated';
import { PageBuilder } from 'components/Common';
import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { Breadcrumb } from 'components/Global';

import { StyledArticlesWrapper, StyledContainer } from './styles';

export interface ArticlesTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.ARTICLES, link: ROUTES.ARTICLES },
];

const ArticlesDetails: React.FC<ArticlesTypes> = ({
  className,
}: ArticlesTypes) => {
  const { slug = '' } = useParams();

  const { data } = usePageArticleQuery({ slug }, { enabled: !!slug });
  const article = data?.pageArticleCollection?.items?.[0];

  return (
    <StyledArticlesWrapper className={className}>
      <StyledContainer>
        <Breadcrumb
          items={[...breadcrumbItems, { title: article?.title ?? '' }]}
        />
      </StyledContainer>
      <PageBuilder pageBuilder={article?.pageBuilder as ComponentPageBuilder} />
    </StyledArticlesWrapper>
  );
};

export default ArticlesDetails;
