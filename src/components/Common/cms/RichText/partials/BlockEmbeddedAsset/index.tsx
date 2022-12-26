import React from 'react';
import { Image } from 'antd';

import { Asset } from 'cms/graphql/types.generated';
import { getAssetType } from 'utils/fileUtils';

export interface BlockEmbeddedAssetTypes {
  className?: string;
  asset: Asset;
}

const BlockEmbeddedAsset: React.FC<BlockEmbeddedAssetTypes> = ({
  className,
  asset,
}: BlockEmbeddedAssetTypes) => {
  const renderImage = (): React.ReactNode => (
    <Image
      className={className}
      title={asset?.title ?? ''}
      src={asset?.url ?? ''}
      width={asset?.width ?? ''}
      height={asset?.height ?? ''}
      preview={false}
    />
  );

  const lookup = {
    image: renderImage,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <>{lookup?.[getAssetType(asset?.contentType)]?.() || null}</>;
};

export default BlockEmbeddedAsset;
