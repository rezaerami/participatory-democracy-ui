import React, { useState } from 'react';
import { Col as AntdCol } from 'antd';

import { ComponentButton, ComponentCol } from 'cms/graphql/types.generated';
import RichText from 'components/Common/cms/RichText';
import Button from 'components/Common/cms/Button';

export interface ColTypes {
  className?: string;
  col: ComponentCol;
}

const Col: React.FC<ColTypes> = ({ className = '', col }: ColTypes) => {
  const [visibility, setVisibility] = useState(!col?.spoilerButton);

  return (
    <AntdCol
      className={className}
      xs={col.colXs ?? 24}
      sm={col.colSm ?? 12}
      md={col.colMd ?? 8}
      lg={col.colLg ?? 6}
      xl={col.colXl ?? 4}
      style={col?.customCss ?? {}}
    >
      {!visibility && (
        <Button
          button={col?.spoilerButton as ComponentButton}
          onClick={() => setVisibility(true)}
        />
      )}
      {visibility && (
        <RichText document={col?.content?.json} links={col?.content?.links} />
      )}
    </AntdCol>
  );
};

export default Col;
