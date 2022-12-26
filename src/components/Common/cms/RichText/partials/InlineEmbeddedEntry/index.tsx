import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { Inline } from '@contentful/rich-text-types';
import { Entry } from 'cms/graphql/types.generated';

import { ComponentInlineArticleFragment } from 'cms/graphql/fragments/componentArticle.generated';
import { ComponentInlineCategoryFragment } from 'cms/graphql/fragments/componentCategory.generated';

import { getPathByTypename } from 'utils/utlUtils';

export interface InlineEmbeddedEntryTypes {
  className?: string;
  entry: Entry;
}

const InlineEmbeddedEntry: React.FC<InlineEmbeddedEntryTypes> = ({
  entry,
  className,
}: InlineEmbeddedEntryTypes) => {
  const link = entry as unknown as
    | ComponentInlineArticleFragment
    | ComponentInlineCategoryFragment;

  const title = link?.title || '';
  const path = generatePath(getPathByTypename(link?.__typename), {
    slug: link?.slug || '',
  });

  return (
    <Link to={path} title={title} className={className}>
      {title}
    </Link>
  );
};

export default InlineEmbeddedEntry;
