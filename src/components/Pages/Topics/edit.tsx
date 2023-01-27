import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import MESSAGES from 'constants/messages';
import { ROUTES } from 'constants/routes';
import { Breadcrumb, Container } from 'components/Global';
import { TopicForm } from 'components/Common';
import { getTopic, updateTopic } from 'services/topic';
import { TopicUpdateDataType } from 'types/topic';

import { StyledTopicsWrapper } from './styles';

export interface EditTopicTypes {
  className?: string;
}

const breadcrumbItems = [
  { title: MESSAGES.HOME, link: ROUTES.HOME },
  { title: MESSAGES.TOPICS, link: ROUTES.TOPICS },
  { title: MESSAGES.EDIT },
];

const EditTopic: React.FC<EditTopicTypes> = ({ className }: EditTopicTypes) => {
  const navigate = useNavigate();
  const { topicCode = '' } = useParams();

  const { data: response } = useQuery(['getTopic', topicCode], () =>
    getTopic({ topicCode }),
  );
  const topic = response?.data?.results;

  const editTopicMutation = useMutation({
    mutationFn: updateTopic,
    onSuccess: (data: any) => {
      navigate(
        generatePath(ROUTES.TOPIC_DETAILS, {
          topicCode: data.data.results.code,
        }),
      );
    },
  });

  if (!topic) return null;

  return (
    <StyledTopicsWrapper className={className}>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      <Container>
        <TopicForm
          topic={topic}
          onSubmit={(data) =>
            editTopicMutation.mutate({
              ...data,
              topicCode: topic.code,
            } as unknown as TopicUpdateDataType)
          }
        />
      </Container>
    </StyledTopicsWrapper>
  );
};
export default EditTopic;
