import React from 'react';
import { Inline } from '@contentful/rich-text-types';
import { Asset } from 'cms/graphql/types.generated';

export interface InlineAssetHyperLinkTypes {
  className?: string;
  node: Inline;
  asset: Asset;
}

const InlineAssetHyperLink: React.FC<InlineAssetHyperLinkTypes> = ({
  node,
  asset,
  className,
}: InlineAssetHyperLinkTypes) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const title = node?.content?.[0]?.value;

  return (
    <a
      href={asset?.url ?? ''}
      target={'_blank'}
      title={asset?.title ?? title}
      className={className}
      rel="noreferrer"
    >
      {title}
    </a>
  );
};

export default InlineAssetHyperLink;
