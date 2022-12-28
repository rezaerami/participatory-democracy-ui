import React, { useEffect, useState } from 'react';
import { Row as AntdRow } from 'antd';

import { ComponentCol, ComponentRow } from 'cms/graphql/types.generated';
import { useRowQuery } from 'cms/graphql/fragments/componentRow.generated';

import { Container } from 'components/Global';
import Col from 'components/Common/cms/Col';

// import { StyledRowWrapper, StyledTitle, StyledSubtitle } from './styles'; //@todo: rnder title and subtitle later
import { StyledRowWrapper } from './styles';

export interface RowTypes {
  className?: string;
  id?: string;
}

const Row: React.FC<RowTypes> = ({ className = '', id = '' }: RowTypes) => {
  const colLimit = 6;
  const [colSkip, setColSkip] = useState<number>(0);
  const [row, setRow] = useState<ComponentRow | null>(null);
  const [cols, setCols] = useState<ComponentCol[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { data, isLoading, isSuccess } = useRowQuery(
    { id, colLimit, colSkip },
    { enabled: !!id && hasMore },
  );

  useEffect(() => {
    const totalCols = data?.componentRow?.columnsCollection?.total ?? 0;
    const newCols = data?.componentRow?.columnsCollection
      ?.items as ComponentCol[];
    if (!row) {
      setRow(data?.componentRow as ComponentRow);
    }
    if (isSuccess && newCols?.length && !isLoading) {
      const result = [...cols, ...newCols];
      setCols(result);
      setColSkip(result?.length);
      setHasMore(result.length < totalCols);
    }
  }, [data, isLoading, isSuccess]);

  const result = (
    <StyledRowWrapper className={className}>
      {/* {!!row?.title && <StyledTitle>{row?.title}</StyledTitle>} */}
      {/* {!!row?.subtitle && <StyledSubtitle>{row?.subtitle}</StyledSubtitle>} */}
      {!!cols?.length && (
        <AntdRow style={row?.customCss ?? {}}>
          {cols?.map((col) => (
            <Col key={col?.sys?.id} col={col} />
          ))}
        </AntdRow>
      )}
    </StyledRowWrapper>
  );

  if (row?.contained) {
    return <Container>{result}</Container>;
  }

  return result;
};

export default Row;
