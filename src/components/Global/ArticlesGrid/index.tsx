import React from 'react';
import Card, { CardContentTypes } from '../Card';
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
  items: CardContentTypes[];
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
          <Card content={article} />
        </StyledCol>
      ))}
    </StyledRow>
  </StyledArticlesGridWrapper>
);

export default ArticlesGrid;
