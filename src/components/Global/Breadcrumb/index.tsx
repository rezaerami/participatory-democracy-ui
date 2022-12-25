import React from 'react';
import { Link } from 'react-router-dom';
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
      <AntdBreadcrumb.Item key={item.title}>
        {item.link ? <Link to={item.link}>{item.title}</Link> : item.title}
      </AntdBreadcrumb.Item>
    ))}
  </AntdBreadcrumb>
);

export default Breadcrumb;
