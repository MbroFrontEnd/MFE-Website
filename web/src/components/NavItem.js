import styled from 'styled-components';

const NavItem = styled.a`
  margin-right: 1.5rem;
  font-size: 1.125rem;
  color: ${props => props.theme.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default NavItem;
