import React from 'react';
import { generatePath } from 'react-router-dom';

import {
  ComponentHeroImage,
  Entry,
  ComponentButton,
  ComponentCarousel,
} from 'cms/graphql/types.generated';
import { ComponentBlockArticleFragment } from 'cms/graphql/fragments/componentArticle.generated';
import { ComponentPolisFragment } from 'cms/graphql/fragments/componentPolis.generated';
import { getPathByTypename } from 'utils/utlUtils';

import { Card, Carousel, HeroImage, PolIsVoteBox } from 'components/Global';
import Button from 'components/Common/cms/Button';
import { ComponentBlockCategoryFragment } from '../../../../../../cms/graphql/fragments/componentCategory.generated';
import { CarouselItemTypes } from '../../../../../Global/Carousel';

export interface BlockEmbeddedEntryTypes {
  className?: string;
  entry: Entry;
}

const BlockEmbeddedEntry: React.FC<BlockEmbeddedEntryTypes> = ({
  className,
  entry,
}: BlockEmbeddedEntryTypes) => {
  const renderCard = (): React.ReactNode => {
    const article = entry as unknown as ComponentBlockArticleFragment;
    const link = generatePath(getPathByTypename(article?.__typename), {
      slug: article?.slug,
    });
    return (
      <Card
        className={className}
        content={{
          description: article?.subtitle ?? '',
          title: article?.title ?? '',
          image: article?.thumbnail?.url ?? '',
          link,
        }}
      />
    );
  };

  const renderHero = (): React.ReactNode => {
    const hero = entry as unknown as ComponentHeroImage;
    return (
      <HeroImage
        className={className}
        image={hero?.image?.url ?? ''}
        description={hero?.subtitle ?? ''}
        title={hero?.title ?? ''}
      />
    );
  };

  const renderVoteBox = (): React.ReactNode => {
    const polis = entry as unknown as ComponentPolisFragment;
    return (
      <PolIsVoteBox
        className={className}
        pageId={polis.pageId ?? ''}
        siteId={polis.siteId ?? ''}
      />
    );
  };

  const renderButton = (): React.ReactNode => {
    const button = entry as ComponentButton;
    return <Button button={button} block />;
  };

  const renderCarousel = (): React.ReactNode => {
    const carousel = entry as ComponentCarousel;
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    const items: CarouselItemTypes[] =
      carousel?.carouselItemsCollection?.items?.map(
        (item): CarouselItemTypes => ({
          title: item?.title ?? '',
          description: item?.subtitle ?? '',
          // @ts-expect-error
          image: item?.thumbnail?.url ?? item?.image?.url ?? '',
          // @ts-expect-error
          link: item?.slug
            ? // @ts-expect-error
              generatePath(getPathByTypename(item?.__typename ?? ''), {
                // @ts-expect-error
                slug: item?.slug,
              })
            : undefined,
        }),
      ) ?? [];
    /* eslint-enable @typescript-eslint/ban-ts-comment */

    return <Carousel items={items} autoplay={carousel?.autoplay ?? false} />;
  };

  const lookup = {
    PageArticle: renderCard,
    PageCategory: renderCard,
    ComponentHeroImage: renderHero,
    ComponentPolIs: renderVoteBox,
    ComponentButton: renderButton,
    ComponentCarousel: renderCarousel,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <>{lookup?.[entry?.__typename]?.() || null}</>;
};

export default BlockEmbeddedEntry;
