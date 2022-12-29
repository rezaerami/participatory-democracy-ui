import styled from 'styled-components';
import { Menu } from 'antd';
import Container from 'components/Global/Container';

export const StyledHeaderWrapper = styled.header`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
`;

export const StyledNavWrapper = styled(Container)``;

export const StyledNavAction = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;
export const StyledUsername = styled.div`
  padding-right: 1rem;
`;

export const StyledMenu = styled(Menu)`
  justify-content: flex-end;
  border: none;
  margin-top: 0.5rem;
`;

export const StyledMenuItem = styled(Menu.Item)``;
