import React from 'react';
import { useParams } from 'react-router-dom';

import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import {
  Breadcrumb,
  HeroImage,
  ArticleContent,
  ArticlesGrid,
} from 'components/Global';
import { usePageArticleQuery } from 'cms/pages/pageArticle';

import { StyledArticlesWrapper, StyledContainer } from './styles';
import mocks from './mock.json';

export interface ArticlesTypes {
  className?: string;
}

const article = mocks.results[0];
const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.ARTICLES, link: ROUTES.ARTICLES },
  { title: article.title },
];

const ArticlesDetails: React.FC<ArticlesTypes> = ({
  className,
}: ArticlesTypes) => {
  const { slug } = useParams();

  const { data } = usePageArticleQuery({ slug });

  return (
    <StyledArticlesWrapper className={className}>
      <HeroImage
        image={article.image}
        title={article.title}
        description={article.description}
      />
      <StyledContainer>
        <Breadcrumb items={breadcrumbItems} />
        <ArticleContent>{article.content}</ArticleContent>
        <ArticlesGrid
          title={MESSAGES.ARTICLES}
          items={[mocks.results[1], mocks.results[2], mocks.results[3]]}
        />
      </StyledContainer>
    </StyledArticlesWrapper>
  );
};

export default ArticlesDetails;
