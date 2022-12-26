import React from 'react';
import { generatePath } from 'react-router-dom';

import { ComponentHeroImage, Entry } from 'cms/graphql/types.generated';
import { ComponentBlockArticleFragment } from 'cms/graphql/fragments/componentArticle.generated';
import { ComponentPolisFragment } from 'cms/graphql/fragments/componentPolis.generated';
import { getPathByTypename } from 'utils/utlUtils';

import { Card, HeroImage, PolIsVoteBox } from 'components/Global';

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

  const lookup = {
    PageArticle: renderCard,
    PageCategory: renderCard,
    ComponentHeroImage: renderHero,
    ComponentPolIs: renderVoteBox,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <>{lookup?.[entry?.__typename]?.() || null}</>;
};

export default BlockEmbeddedEntry;
