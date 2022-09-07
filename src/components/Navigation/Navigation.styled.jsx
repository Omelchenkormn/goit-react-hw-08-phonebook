import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding-right: 15px;
  font-weight: 500;
  color: #ffff;
  font-size: 18px;
  &.active {
    color: #2196f3;
  }
`;
export const Nav = styled.nav`
  background-color: black;
  padding-left: 175px;
  margin-bottom: 30px;
  height: 60px;
  display: flex;
  align-items: center;
`;
