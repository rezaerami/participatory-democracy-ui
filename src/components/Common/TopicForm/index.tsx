import React, { useState } from 'react';
import { Button, Form, Image, Input, Space } from 'antd';
import { DeleteOutlined, InboxOutlined, PlusOutlined } from '@ant-design/icons';

import { TopicType } from 'types/topic';
import { WysiwygEditor } from 'components/Global';
import MESSAGES from 'constants/messages';
import { fileToBase64Async, getExtension } from 'utils/fileUtils';

import {
  StyledImagePreviewPlaceholder,
  StyledFileUploadWrapper,
} from './styles';

const { TextArea } = Input;

export enum Mode {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}
export interface TopicFormTypes {
  className?: string;
  topic?: TopicType;
  onSubmit: (topic: TopicFormDataType) => any;
  mode?: Mode;
}

interface TopicFormDataType {
  title?: string;
  description?: string;
  content?: string;
  image?: File;
  polisDescription?: string;
  polisComments?: string[];
}

const TopicForm: React.FC<TopicFormTypes> = ({
  className,
  topic,
  onSubmit,
  mode = Mode.UPDATE,
}: TopicFormTypes) => {
  const { title, content, description } = topic ?? {};
  const maxCommentsLength = 10;
  const initialFormData: TopicFormDataType = {
    title,
    content,
    description,
  };
  const [formData, setFormData] = useState<TopicFormDataType>(initialFormData);
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    topic?.image,
  );
  const [comments, setComments] = useState<string[]>([]);

  const handleFormChange = (key: keyof TopicFormDataType, value: any): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleFileSelect = async (e: any): Promise<void> => {
    const file = e.target.files?.[0];
    if (!validateFile(file)) return;
    handleFormChange('image', file);
    const preview = await fileToBase64Async(file);
    setImagePreview(preview as string);
  };

  const validateFile = (file: File): boolean =>
    ['jpg', 'jpeg', 'png'].includes(getExtension(file.name));

  const handleChangeComment = (index: number) => (e: any) => {
    setComments(
      comments.map((comment, i) => (i === index ? e?.target?.value : comment)),
    );
  };

  const handleAddComment = (): void => {
    setComments([...comments, '']);
  };

  const handleRemoveComment = (index: number) => (): void => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const isDisabled =
    !formData?.title ||
    !formData?.description ||
    !formData?.content ||
    !imagePreview ||
    (mode === Mode.CREATE && !formData.polisDescription);

  return (
    <Form className={className} wrapperCol={{ span: 12 }} layout="vertical">
      <Form.Item label={MESSAGES.IMAGE}>
        <label htmlFor="file-input">
          <StyledImagePreviewPlaceholder>
            {imagePreview ? (
              <Image preview={false} src={imagePreview} />
            ) : (
              <InboxOutlined />
            )}
          </StyledImagePreviewPlaceholder>
        </label>
        <StyledFileUploadWrapper>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <input id="file-input" type="file" onChange={handleFileSelect} />
        </StyledFileUploadWrapper>
      </Form.Item>
      <Form.Item label={MESSAGES.TITLE}>
        <Input
          value={formData?.title}
          onChange={(e) => handleFormChange('title', e?.target.value)}
        />
      </Form.Item>
      <Form.Item label={MESSAGES.DESCRIPTIONS}>
        <TextArea
          value={formData?.description}
          onChange={(e) => handleFormChange('description', e?.target.value)}
        />
      </Form.Item>
      <Form.Item label={MESSAGES.CONTENT}>
        <WysiwygEditor
          value={formData?.content}
          onChange={(data) => handleFormChange('content', data)}
          style={{ direction: 'ltr' }}
        />
      </Form.Item>
      {mode === Mode.CREATE ? (
        <>
          <Form.Item label={MESSAGES.POLIS_DESCRIPTIONS}>
            <TextArea
              value={formData?.polisDescription}
              onChange={(e) =>
                handleFormChange('polisDescription', e?.target.value)
              }
            />
          </Form.Item>
          <Form.Item label={MESSAGES.POLIS_COMMENTS}>
            {comments.map((comment, i) => (
              <Form.Item key={i}>
                <Input
                  value={comment}
                  onChange={handleChangeComment(i)}
                  style={{ width: '90%' }}
                />
                <Button
                  type={'ghost'}
                  htmlType={'button'}
                  onClick={handleRemoveComment(i)}
                  icon={<DeleteOutlined />}
                  size={'middle'}
                />
              </Form.Item>
            ))}
            {comments.length < maxCommentsLength && (
              <Button
                type={'dashed'}
                htmlType={'button'}
                onClick={handleAddComment}
                icon={<PlusOutlined />}
                size={'middle'}
              >
                {MESSAGES.ADD_COMMENT}
              </Button>
            )}
          </Form.Item>
        </>
      ) : null}
      <Form.Item>
        <Button
          type={'primary'}
          htmlType={'submit'}
          onClick={() =>
            formData ? onSubmit({ ...formData, polisComments: comments }) : {}
          }
          disabled={isDisabled}
        >
          {MESSAGES.SUBMIT}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TopicForm;
