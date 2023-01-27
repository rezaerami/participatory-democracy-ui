import React, { useEffect, useState } from 'react';
import { generatePath } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import { useDidUpdateEffect } from 'hooks';
import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { getTopics } from 'services/topic';
import { TopicType } from 'types/topic';
import { CardsGrid, Breadcrumb, Container } from 'components/Global';
import { CardContentTypes } from 'components/Global/Card';

import { StyledTopicsWrapper } from './styles';

export interface TopicsTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.TOPICS },
];

const Topics: React.FC<TopicsTypes> = ({ className }: TopicsTypes) => {
  const { ref, inView } = useInView();
  const limit = 30;
  const [topics, setTopics] = useState<TopicType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { data, isSuccess, isLoading, fetchNextPage } = useInfiniteQuery(
    ['getTopics'],
    ({ pageParam }) => getTopics({ limit, ...pageParam }),
    {
      getNextPageParam: () => ({ offset: topics.length }),
      enabled: hasMore,
    },
  );
  useEffect(() => {
    const lastPage = data?.pages[data?.pages?.length - 1];
    const newResult = lastPage?.data?.results ?? [];
    const total = lastPage?.data?.metadata?.total;

    if (isSuccess && total && !isLoading) {
      const result = [...topics, ...newResult];
      setTopics(result);
      setHasMore(result.length < total);
    }
  }, [data, isLoading, isSuccess]);

  useDidUpdateEffect(() => {
    if (inView && !isLoading) {
      void fetchNextPage();
    }
  }, [inView, isLoading]);

  const topicCards: CardContentTypes[] =
    topics?.map(
      (topic): CardContentTypes => ({
        title: topic?.title ?? '',
        description: topic?.description ?? '',
        image: topic?.image ?? '',
        link: generatePath(ROUTES.TOPIC_DETAILS, {
          topicCode: topic?.code ?? '',
        }),
      }),
    ) ?? [];

  return (
    <StyledTopicsWrapper className={className}>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      <Container>
        <CardsGrid items={topicCards} />
      </Container>
      {hasMore && !isLoading && <span ref={ref} />}
    </StyledTopicsWrapper>
  );
};
export default Topics;
