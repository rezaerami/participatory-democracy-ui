import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { generatePath, useNavigate } from 'react-router-dom';

import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { createTopic } from 'services/topic';
import { TopicCreateDataType } from 'types/topic';

import { Breadcrumb, Container } from 'components/Global';
import { TopicForm } from 'components/Common';
import { Mode } from 'components/Common/TopicForm';

import { StyledTopicsWrapper } from './styles';

export interface CreateTopicTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.TOPICS, link: ROUTES.TOPICS },
  { title: MESSAGES.ADD },
];

const CreateTopic: React.FC<CreateTopicTypes> = ({
  className,
}: CreateTopicTypes) => {
  const navigate = useNavigate();

  const createTopicMutation = useMutation({
    mutationFn: createTopic,
    onSuccess: (data) => {
      navigate(
        generatePath(ROUTES.TOPIC_DETAILS, {
          topicCode: data.data.results.code,
        }),
      );
    },
  });

  return (
    <StyledTopicsWrapper className={className}>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      <Container>
        <TopicForm
          mode={Mode.CREATE}
          onSubmit={(data) =>
            createTopicMutation.mutate(data as unknown as TopicCreateDataType)
          }
        />
      </Container>
    </StyledTopicsWrapper>
  );
};
export default CreateTopic;
