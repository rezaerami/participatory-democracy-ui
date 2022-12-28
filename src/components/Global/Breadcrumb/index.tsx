import React from 'react';
import { Breadcrumb as AntdBreadcrumb, BreadcrumbProps } from 'antd';

export interface BreadcrumbItemTypes {
  title: string;
  link?: string;
}

export interface BreadcrumbTypes extends BreadcrumbProps {
  className?: string;
  items: BreadcrumbItemTypes[];
}

const Breadcrumb: React.FC<BreadcrumbTypes> = ({
  className,
  items = [],
  ...rest
}: BreadcrumbTypes) => (
  <AntdBreadcrumb className={className} {...rest}>
    {items.map((item) => (
      <AntdBreadcrumb.Item href={item?.link ?? undefined} key={item.title}>
        {item.title}
      </AntdBreadcrumb.Item>
    ))}
  </AntdBreadcrumb>
);

export default Breadcrumb;
