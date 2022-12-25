import React from 'react';

import { ArticlesGrid, Carousel, Container } from 'components/Global';
import MESSAGES from 'constants/messages';

import { StyledHomeWrapper } from './styles';
import mock from './mock.json';

export interface HomeTypes {
  className?: string;
}

const Home: React.FC<HomeTypes> = ({ className }: HomeTypes) => (
  <StyledHomeWrapper className={className}>
    <Carousel items={mock.results.highlights} autoplay />
    <Container>
      <ArticlesGrid title={MESSAGES.ARTICLES} items={mock.results.articles} />
    </Container>
  </StyledHomeWrapper>
);

export default Home;
