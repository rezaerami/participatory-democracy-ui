import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel as AntdCarousel, CarouselProps } from 'antd';

import HeroImage from 'components/Global/HeroImage';
import { StyledCarouselItem } from './styles';

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
}: CarouselTypes) => {
  const renderHeroImage = (item: CarouselItemTypes): React.ReactNode => (
    <HeroImage
      image={item.image}
      title={item.title}
      description={item.description}
    />
  );
  return (
    <AntdCarousel className={className} {...rest}>
      {items.map((item) => (
        <StyledCarouselItem key={item.image}>
          {item?.link ? (
            <Link to={item.link} title={item?.title ?? ''}>
              {renderHeroImage(item)}
            </Link>
          ) : (
            renderHeroImage(item)
          )}
        </StyledCarouselItem>
      ))}
    </AntdCarousel>
  );
};

export default Carousel;
