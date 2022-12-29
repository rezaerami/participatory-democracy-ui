import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  a {
    color: inherit;
  }
`;

export const StyledCoverImage: any = styled.div`
  background: url('${(props: any) => props.bg}') no-repeat scroll center center /
    cover;
  height: 24rem;
  overflow: hidden;
  border-radius: 0.8rem 0.8rem 0 0;
`;
