import React from 'react';
import { Button as AntdButton } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ButtonProps, ButtonShape, ButtonType } from 'antd/es/button/button';
import { ComponentButton } from 'cms/graphql/types.generated';

export interface ButtonTypes extends ButtonProps {
  className?: string;
  button: ComponentButton;
}

const Button: React.FC<ButtonTypes> = ({
  className = '',
  button,
  ...rest
}: ButtonTypes) => (
  <AntdButton
    className={className}
    title={button?.title ?? ''}
    size={button?.size as SizeType}
    shape={button?.shape as ButtonShape}
    type={button?.type as ButtonType}
    target={button?.target ?? undefined}
    href={button?.href ?? undefined}
    {...rest}
  >
    {button?.title}
  </AntdButton>
);

export default Button;
