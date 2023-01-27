import styled from 'styled-components';

export const StyledImagePreviewPlaceholder = styled.div`
  background-color: var(--lightGray);
  color: var(--darkGray);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-size: 4rem;
  min-height: 20rem;
  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledFileUploadWrapper = styled.div`
  display: none;
`;
