import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { Inline } from '@contentful/rich-text-types';
import { Entry } from 'cms/graphql/types.generated';

import { ComponentInlineArticleFragment } from 'cms/graphql/fragments/componentArticle.generated';
import { ComponentInlineCategoryFragment } from 'cms/graphql/fragments/componentCategory.generated';

import { getPathByTypename } from 'utils/utlUtils';

export interface InlineEntryHyperLinkTypes {
  className?: string;
  node: Inline;
  entry: Entry;
}

const InlineEntryHyperLink: React.FC<InlineEntryHyperLinkTypes> = ({
  node,
  entry,
  className,
}: InlineEntryHyperLinkTypes) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const title = node?.content?.[0]?.value;
  const link = entry as unknown as
    | ComponentInlineArticleFragment
    | ComponentInlineCategoryFragment;

  const path = generatePath(getPathByTypename(link?.__typename), {
    slug: link?.slug || '',
  });

  return (
    <Link to={path} title={link?.title ?? title} className={className}>
      {title}
    </Link>
  );
};

export default InlineEntryHyperLink;
