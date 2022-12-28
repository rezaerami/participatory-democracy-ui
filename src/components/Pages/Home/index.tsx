import React from 'react';

import { usePageHomeQuery } from 'cms/graphql/queries/pageHome.generated';
import { ComponentPageBuilder } from 'cms/graphql/types.generated';
import { PageBuilder } from 'components/Common';

import { StyledHomeWrapper } from './styles';

export interface HomeTypes {
  className?: string;
}

const Home: React.FC<HomeTypes> = ({ className }: HomeTypes) => {
  const { data } = usePageHomeQuery();
  return (
    <StyledHomeWrapper className={className}>
      <PageBuilder
        pageBuilder={
          data?.pageHomeCollection?.items?.[0]
            ?.pageBuilder as ComponentPageBuilder
        }
      />
    </StyledHomeWrapper>
  );
};

export default Home;
