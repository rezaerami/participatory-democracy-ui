import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { StyledArticleCardWrapper, StyledCoverImage } from './styles';

const { Meta } = Card;

export interface ArticleTypes {
  title: string;
  description: string;
  image: string;
  link: string;
}
export interface ArticleCardTypes {
  className?: string;
  article: ArticleTypes;
}

const ArticleCard: React.FC<ArticleCardTypes> = ({
  className,
  article,
}: ArticleCardTypes) => (
  <StyledArticleCardWrapper className={className}>
    <Link to={article.link}>
      <Card hoverable cover={<StyledCoverImage bg={article.image} />}>
        <Meta title={article.title} description={article.description} />
      </Card>
    </Link>
  </StyledArticleCardWrapper>
);

export default ArticleCard;
