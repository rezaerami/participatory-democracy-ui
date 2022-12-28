import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { GlobalContext } from 'components/Common/Hoc/context';
import { navItems, userMenu, guestMenu } from './navItems';
import {
  StyledHeaderWrapper,
  StyledNavWrapper,
  StyledNavAction,
  StyledUsername,
  StyledMenu,
  StyledMenuItem,
} from './styles';

export interface HeaderTypes {
  className?: string;
}

const Header: React.FC<HeaderTypes> = ({ className }: HeaderTypes) => {
  const { user, isLoggedIn } = useContext(GlobalContext);
  return (
    <StyledHeaderWrapper className={className}>
      <StyledNavWrapper>
        <Row justify="space-between">
          <Col xs={{ span: 22 }} md={{ span: 12 }}>
            <StyledNavAction>
              <Dropdown
                menu={{
                  items: (isLoggedIn ? userMenu : guestMenu).map((item) => ({
                    label: <Link to={item.path}>{item.label}</Link>,
                    key: item.label,
                  })),
                }}
              >
                <Button
                  type="primary"
                  shape="circle"
                  icon={<UserOutlined />}
                  size={'large'}
                />
              </Dropdown>
              {isLoggedIn && <StyledUsername>{user?.name}</StyledUsername>}
            </StyledNavAction>
          </Col>
          <Col xs={{ span: 2 }} md={{ span: 12 }}>
            <StyledMenu mode="horizontal">
              {navItems.map((navItem) => (
                <StyledMenuItem key={navItem.label}>
                  <Link to={navItem.path}>{navItem.label}</Link>
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </Col>
        </Row>
      </StyledNavWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
