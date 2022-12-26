import React from 'react';

import { Document, INLINES, BLOCKS, Inline } from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import {
  Asset,
  ComponentColContentLinks,
  Entry,
} from 'cms/graphql/types.generated';
import InlineEntryHyperLink from './partials/InlineEntryHyperLink';
import InlineEmbeddedEntry from './partials/InlineEmbeddedEntry';
import BlockEmbeddedEntry from './partials/BlockEmbeddedEntry';
import InlineAssetHyperLink from './partials/InlineAssetHyperLink';
import BlockEmbeddedAsset from './partials/BlockEmbeddedAsset';

export type RichTextLinksType = ComponentColContentLinks;
export interface RichTextTypes {
  document: Document;
  links?: RichTextLinksType;
  options?: Options;
}

const getLinksList = (
  links?: Array<Entry | Asset>,
): { [key: string]: Entry | Asset } =>
  links?.reduce((result, link) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    result[link.sys.id] = link;
    return result;
  }, {}) ?? [];

export const getOptions = (
  options?: Options,
  links?: RichTextLinksType,
): Options => {
  const blockAssets = getLinksList(links?.assets?.block as Asset[]);
  const hyperlinkAssets = getLinksList(links?.assets?.hyperlink as Asset[]);
  const blockEntries = getLinksList(links?.entries?.block as Entry[]);
  const inlineEntries = getLinksList(links?.entries?.inline as Entry[]);
  const hyperlinkEntries = getLinksList(links?.entries?.hyperlink as Entry[]);

  const defaultOptions: Options = {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node) => (
        <InlineEntryHyperLink
          node={node as Inline}
          entry={hyperlinkEntries?.[node?.data?.target?.sys?.id]}
        />
      ),
      [INLINES.EMBEDDED_ENTRY]: (node) => (
        <InlineEmbeddedEntry
          entry={inlineEntries?.[node?.data?.target?.sys?.id]}
        />
      ),
      [INLINES.ASSET_HYPERLINK]: (node) => (
        <InlineAssetHyperLink
          node={node as Inline}
          asset={hyperlinkAssets?.[node?.data?.target?.sys?.id]}
        />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => (
        <BlockEmbeddedEntry
          entry={blockEntries?.[node?.data?.target?.sys?.id]}
        />
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <BlockEmbeddedAsset
          asset={blockAssets?.[node?.data?.target?.sys?.id]}
        />
      ),
    },
  };

  return {
    ...defaultOptions,
    ...options,
    renderNode: {
      ...defaultOptions.renderNode,
      ...options?.renderNode,
    },
  };
};

const RochText: React.FC<RichTextTypes> = ({
  document,
  options,
  links,
}: RichTextTypes) => (
  <>{documentToReactComponents(document, getOptions(options, links))}</>
);

export default RochText;
