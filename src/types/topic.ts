import { UserType } from './user';
import { WhiteHouseResponseType } from './common';

export interface TopicItemParamsType {
  topicCode: string;
}

export interface TopicsResponseType extends WhiteHouseResponseType {
  results: TopicType[];
}
export interface TopicResponseType extends WhiteHouseResponseType {
  results: TopicType;
}

export interface TopicType {
  code: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  published: boolean;
  user: UserType;
  createdAt: string;
  updatedAt: string;
  polisId: string;
  polisSiteId: string;
}

export interface TopicCreateDataType {
  title: string;
  description: string;
  content: string;
  image: File;
  polisDescription: string;
  polisComments?: string[];
}

export interface TopicUpdateDataType {
  topicCode: string;
  title?: string;
  description?: string;
  content?: string;
  image?: File;
}
