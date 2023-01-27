import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Avatar, List } from 'antd';
import { generatePath, Link } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import MESSAGES from 'constants/messages';
import { getTopics } from 'services/user';

import { StyledMyTopicsWrapper, StyledContainer } from './styles';

export interface MyTopicsTypes {
  className?: string;
}

const MyTopics: React.FC<MyTopicsTypes> = ({ className }: MyTopicsTypes) => {
  const { data, isLoading } = useQuery(['getTopics'], getTopics);

  return (
    <StyledMyTopicsWrapper className={className}>
      <StyledContainer>
        <List
          className="demo-loadmore-list"
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={data?.data.results}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Link
                  to={generatePath(ROUTES.EDIT_TOPIC, {
                    topicCode: item.code,
                  })}
                  key="edit"
                >
                  {MESSAGES.EDIT}
                </Link>,
                <Link
                  to={generatePath(ROUTES.TOPIC_DETAILS, {
                    topicCode: item.code,
                  })}
                  key="show"
                >
                  {MESSAGES.VISIT}
                </Link>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={
                  <Link
                    to={generatePath(ROUTES.TOPIC_DETAILS, {
                      topicCode: item.code,
                    })}
                    key="show"
                  >
                    {item.title}
                  </Link>
                }
              />
            </List.Item>
          )}
        />
      </StyledContainer>
    </StyledMyTopicsWrapper>
  );
};

export default MyTopics;
