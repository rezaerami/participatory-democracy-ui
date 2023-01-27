import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Collapse } from 'antd';

import { getTopic } from 'services/topic';
import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { Breadcrumb, HeroImage, PolIsVoteBox } from 'components/Global';

import {
  StyledTopicsWrapper,
  StyledContainer,
  StyledSectionContent,
} from './styles';
const { Panel } = Collapse;

export interface TopicsTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.TOPICS, link: ROUTES.TOPICS },
];

const TopicsDetails: React.FC<TopicsTypes> = ({ className }: TopicsTypes) => {
  const { topicCode = '' } = useParams();

  const { data } = useQuery(['getTopic', topicCode], () =>
    getTopic({ topicCode }),
  );
  const topic = data?.data?.results;

  return (
    <StyledTopicsWrapper className={className}>
      <StyledContainer>
        <Breadcrumb
          items={[...breadcrumbItems, { title: topic?.title ?? '' }]}
        />
        <HeroImage
          image={topic?.image ?? ''}
          title={topic?.title}
          description={topic?.description}
        />
        <Collapse defaultActiveKey={1}>
          <Panel header={MESSAGES.DESCRIPTIONS} key={1}>
            <StyledSectionContent
              dangerouslySetInnerHTML={{ __html: topic?.content ?? '' }}
            />
          </Panel>
          {!!topic?.polisId && (
            <Panel header={MESSAGES.SHOW_TOPIC} key={2}>
              <PolIsVoteBox
                pageId={topic.polisId}
                siteId={topic.polisSiteId}
              />
            </Panel>
          )}
        </Collapse>
      </StyledContainer>
    </StyledTopicsWrapper>
  );
};

export default TopicsDetails;
