import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import MESSAGES from 'constants/messages';
import { useRedirect } from 'hooks';
import { isExternalUrl } from 'utils/utlUtils';
import { GlobalContext } from 'components/Common/Hoc/context';

import { navItems, userMenu, guestMenu, NavItemType } from './navItems';
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
  const { user, isLoggedIn, handleLogout } = useContext(GlobalContext);
  const { redirect } = useRedirect();

  const logoutMenuItem: NavItemType = {
    label: MESSAGES.LOGOUT,
    onClick: handleLogout,
  };

  const handleNavItemClick =
    (link: NavItemType) =>
    (e: any): void => {
      if (link?.onClick) {
        link.onClick();
      }

      if (link?.path && isExternalUrl(link.path)) {
        e.preventDefault();

        redirect(link.path, window.location.pathname);
      }
    };

  const renderLink = (item: NavItemType): React.ReactNode =>
    isExternalUrl(item?.path ?? '') ? (
      <a href={item.path} onClick={handleNavItemClick(item)}>
        {item.label}
      </a>
    ) : (
      <Link to={item?.path ?? ''} onClick={handleNavItemClick(item)}>
        {item.label}
      </Link>
    );

  return (
    <StyledHeaderWrapper className={className}>
      <StyledNavWrapper>
        <Row justify="space-between">
          <Col xs={{ span: 22 }} md={{ span: 12 }}>
            <StyledNavAction>
              <Dropdown
                menu={{
                  items: (isLoggedIn
                    ? [...userMenu, logoutMenuItem]
                    : guestMenu
                  ).map((item) => ({
                    label: item?.path ? (
                      renderLink(item)
                    ) : (
                      <span onClick={item.onClick}>{item.label}</span>
                    ),
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
                  {navItem?.path ? (
                    <Link to={navItem.path}>{navItem.label}</Link>
                  ) : (
                    navItem.label
                  )}
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
