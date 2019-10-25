import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled.a`
  margin-right: 1.5rem;
  font-size: 1.125rem;
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  transition: opacity 0.25s linear;

  &:hover {
    opacity: 0.75;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const NavItemLink = styled(Link)`
  margin-right: 1.5rem;
  font-size: 1.125rem;
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  transition: opacity 0.25s linear;

  &:hover {
    opacity: 0.75;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default NavItem;
