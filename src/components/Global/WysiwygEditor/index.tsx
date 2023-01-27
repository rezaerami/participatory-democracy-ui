import React from 'react';
import { ReactQuillProps } from 'react-quill';
import { StyledReactQuill } from './styles';

const WysiwygEditor: React.FC<ReactQuillProps> = (props: ReactQuillProps) => (
  <StyledReactQuill theme="snow" {...props} />
);

export default WysiwygEditor;
