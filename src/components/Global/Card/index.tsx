import React from 'react';
import { Card as AntdCard } from 'antd';
import { Link } from 'react-router-dom';
import { StyledCardWrapper, StyledCoverImage } from './styles';

const { Meta } = AntdCard;

export interface CardContentTypes {
  title: string;
  description: string;
  image: string;
  link: string;
}
export interface CardTypes {
  className?: string;
  content: CardContentTypes;
}

const Card: React.FC<CardTypes> = ({ className, content }: CardTypes) => (
  <StyledCardWrapper className={className}>
    <Link to={content.link}>
      <AntdCard hoverable cover={<StyledCoverImage bg={content.image} />}>
        <Meta title={content.title} description={content.description} />
      </AntdCard>
    </Link>
  </StyledCardWrapper>
);

export default Card;
