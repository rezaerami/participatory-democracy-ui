import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel as AntdCarousel, CarouselProps } from 'antd';

import {
  StyledCarouselItem,
  StyledCarouselImage,
  StyledCarouselTitle,
  StyledCarouselDescription,
  StyledSliderContent,
} from './styles';
import HeroImage from '../HeroImage';

export interface CarouselItemTypes {
  image: string;
  link: string;
  title?: string;
  description?: string;
}

export interface CarouselTypes extends CarouselProps {
  className?: string;
  items: CarouselItemTypes[];
}

const Carousel: React.FC<CarouselTypes> = ({
  className,
  items = [],
  ...rest
}: CarouselTypes) => (
  <AntdCarousel className={className} {...rest}>
    {items.map((item) => (
      <StyledCarouselItem key={item.image}>
        <Link to={item.link} title={item?.title ?? ''}>
          <HeroImage
            image={item.image}
            title={item.title}
            description={item.description}
          />
        </Link>
      </StyledCarouselItem>
    ))}
  </AntdCarousel>
);

export default Carousel;
