import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Nav from './Nav';
import NavItem from './NavItem';

const StyledHeader = styled.header`
  margin: 0 auto 7rem auto;
  padding: 4rem 1.5rem 0 1.5rem;
  display: flex;
  max-width: 980px;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <img
      src={require('../assets/images/logo.svg')}
      alt={siteTitle}
      width="220"
      height="60"
    />
    <Nav>
      <NavItem href="#">Speakers</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Code of Conduct</NavItem>
      <NavItem href="#">Spectrum</NavItem>
      <NavItem href="#">Github</NavItem>
    </Nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Header;
