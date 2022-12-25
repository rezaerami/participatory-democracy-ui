import React from 'react';
import ArticleCard, { ArticleTypes } from '../ArticleCard';
import {
  StyledArticlesGridWrapper,
  StyledTitle,
  StyledSpan,
  StyledRow,
  StyledCol,
} from './styles';

export interface ArticlesGridTypes {
  className?: string;
  title?: string;
  items: ArticleTypes[];
}

const ArticlesGrid: React.FC<ArticlesGridTypes> = ({
  className,
  title,
  items = [],
}: ArticlesGridTypes) => (
  <StyledArticlesGridWrapper className={className}>
    {!!title && (
      <StyledTitle>
        <StyledSpan>{title}</StyledSpan>
      </StyledTitle>
    )}
    <StyledRow justify="center">
      {items.map((article) => (
        <StyledCol key={article.link} sm={{ span: 12 }} md={{ span: 8 }}>
          <ArticleCard article={article} />
        </StyledCol>
      ))}
    </StyledRow>
  </StyledArticlesGridWrapper>
);

export default ArticlesGrid;
