import React from 'react';

import {
  StyledHeroImageWrapper,
  StyledCarouselImage,
  StyledCarouselTitle,
  StyledCarouselDescription,
  StyledSliderContent,
} from './styles';

export interface HeroImageTypes {
  className?: string;
  image: string;
  title?: string;
  description?: string;
}

const HeroImage: React.FC<HeroImageTypes> = ({
  className,
  image,
  description,
  title,
}: HeroImageTypes) => (
  <StyledHeroImageWrapper className={className}>
    <StyledCarouselImage bg={image} />
    {(!!title || !!description) && (
      <StyledSliderContent>
        {!!title && <StyledCarouselTitle>{title}</StyledCarouselTitle>}
        {!!description && (
          <StyledCarouselDescription>{description}</StyledCarouselDescription>
        )}
      </StyledSliderContent>
    )}
  </StyledHeroImageWrapper>
);

export default HeroImage;
