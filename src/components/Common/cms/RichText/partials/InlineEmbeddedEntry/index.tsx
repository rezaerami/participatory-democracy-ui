import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { Entry, ComponentButton } from 'cms/graphql/types.generated';

import { ComponentInlineArticleFragment } from 'cms/graphql/fragments/componentArticle.generated';
import { ComponentInlineCategoryFragment } from 'cms/graphql/fragments/componentCategory.generated';

import { getPathByTypename } from 'utils/utlUtils';
import Button from 'components/Common/cms/Button';

export interface InlineEmbeddedEntryTypes {
  className?: string;
  entry: Entry;
}

const InlineEmbeddedEntry: React.FC<InlineEmbeddedEntryTypes> = ({
  entry,
  className,
}: InlineEmbeddedEntryTypes) => {
  const renderEntryLink = (): React.ReactNode => {
    const link = entry as unknown as
      | ComponentInlineArticleFragment
      | ComponentInlineCategoryFragment;
    const title = link?.title ?? '';
    const path = generatePath(getPathByTypename(link?.__typename), {
      slug: link?.slug ?? '',
    });

    return (
      <Link to={path} title={title} className={className}>
        {title}
      </Link>
    );
  };

  const renderButton = (): React.ReactNode => {
    const button = entry as ComponentButton;
    return <Button button={button} block />;
  };

  const lookup = {
    PageArticle: renderEntryLink,
    PageCategory: renderEntryLink,
    ComponentButton: renderButton,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <>{lookup?.[entry?.__typename]?.() || null}</>;
};

export default InlineEmbeddedEntry;
