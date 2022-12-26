import React from 'react';
import { Col as AntdCol } from 'antd';

import { ComponentCol } from 'cms/graphql/types.generated';
import RichText from '../RichText';

export interface ColTypes {
  className?: string;
  col: ComponentCol;
}

const Col: React.FC<ColTypes> = ({ className = '', col }: ColTypes) => (
  <AntdCol
    className={className}
    xs={col.colXs || 24}
    sm={col.colSm || 12}
    md={col.colMd || 8}
    lg={col.colLg || 6}
    xl={col.colXl || 4}
  >
    <RichText document={col?.content?.json} links={col?.content?.links} />
  </AntdCol>
);

export default Col;
