import React from 'react';
import Card, { CardContentTypes } from 'components/Global/Card';
import { StyledCardsGridWrapper, StyledRow, StyledCol } from './styles';

export interface CardsGridTypes {
  className?: string;
  title?: string;
  items: CardContentTypes[];
}

const CardsGrid: React.FC<CardsGridTypes> = ({
  className,
  items = [],
}: CardsGridTypes) => (
  <StyledCardsGridWrapper className={className}>
    <StyledRow>
      {items.map((card) => (
        <StyledCol
          key={card.link}
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 8 }}
          lg={{ span: 6 }}
        >
          <Card content={card} />
        </StyledCol>
      ))}
    </StyledRow>
  </StyledCardsGridWrapper>
);

export default CardsGrid;
