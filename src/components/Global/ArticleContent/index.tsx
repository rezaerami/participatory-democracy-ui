import React from 'react';
import { StyledArticleContent } from './styles';

export interface ArticlesGridTypes {
  className?: string;
  children: React.ReactNode;
}

const ArticlesContent: React.FC<ArticlesGridTypes> = ({
  className,
  children,
}: ArticlesGridTypes) => (
  <StyledArticleContent className={className}>{children}</StyledArticleContent>
);

export default ArticlesContent;
