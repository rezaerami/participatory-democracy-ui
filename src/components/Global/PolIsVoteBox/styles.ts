import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib';

export const StyledPolIsVoteBoxWrapper = styled.div`
  &.shouldLogin {
    position: relative;
    height: 40rem;
    overflow: hidden;
    > div.polis {
      filter: blur(0.5rem);
    }
  }
`;

export const StyledPolIsVoteBox = styled.div`
  iframe {
    width: 100%;
    border: none !important;
  }
`;

export const StyledShadowOver = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledButton: React.FC<ButtonProps> = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
