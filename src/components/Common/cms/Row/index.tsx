import React, { useEffect, useState } from 'react';
import { Row as AntdRow } from 'antd';

import { ComponentCol, ComponentRow } from 'cms/graphql/types.generated';
import { useRowQuery } from 'cms/graphql/fragments/componentRow.generated';

import Col from '../Col';
import { StyledRowWrapper, StyledTitle, StyledSubtitle } from './styles';

export interface RowTypes {
  className?: string;
  id?: string;
}

const Row: React.FC<RowTypes> = ({ className = '', id = '' }: RowTypes) => {
  const colLimit = 6;
  const [colSkip, setColSkip] = useState<number>(0);
  const [cols, setCols] = useState<ComponentCol[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { data, isLoading, isSuccess } = useRowQuery(
    { id, colLimit, colSkip },
    { enabled: !!id && hasMore },
  );
  const row = data?.componentRow;

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setColSkip(colSkip + colLimit);
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    const totalCols = data?.componentRow?.columnsCollection?.total ?? 0;
    const newCols = data?.componentRow?.columnsCollection
      ?.items as ComponentCol[];
    if (isSuccess && newCols?.length && !isLoading) {
      const result = [...cols, ...newCols];
      setCols(result);
      setHasMore(result.length < totalCols);
    }
  }, [data, isLoading, isSuccess]);


  return (
    <StyledRowWrapper className={className}>
      {!!row?.title && <StyledTitle>{row?.title}</StyledTitle>}
      {!!row?.subtitle && <StyledSubtitle>{row?.subtitle}</StyledSubtitle>}
      {!!cols?.length && (
        <AntdRow>
          {cols?.map((col) => (
            <Col key={col?.sys?.id} col={col} />
          ))}
        </AntdRow>
      )}
    </StyledRowWrapper>
  );
};

export default Row;
