import 'react-quill/dist/quill.snow.css';

import React from 'react';
import styled from 'styled-components';
import ReactQuill, { ReactQuillProps } from 'react-quill';

export const StyledReactQuill: React.FC<ReactQuillProps> = styled(ReactQuill)`
  .ql-editor {
    min-height: 20rem;
    max-height: 40rem;
  }
`;
