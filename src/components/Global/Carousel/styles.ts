import styled from 'styled-components';

export const StyledCarouselItem = styled.div`
  position: relative;
`;

export const StyledCarouselImage: any = styled.div`
  background: url('${(props: any) => props.bg}') no-repeat scroll center center /
    cover;
  height: 80vh;
`;

export const StyledSliderContent = styled.section`
  direction: rtl;
  text-align: right;
  position: absolute;
  bottom: 20%;
  right: 5%;
`;

export const StyledCarouselTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const StyledCarouselDescription = styled.p`
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;
