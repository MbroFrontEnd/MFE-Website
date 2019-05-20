import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 4rem 1.5rem 0 1.5rem;
  display: flex;
  max-width: 1250px;
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
    <nav>
      <a href="#">Speakers</a>
      <a href="#">About</a>
      <a href="#">Code of Conduct</a>
      <a href="#">Spectrum</a>
      <a href="#">Github</a>
    </nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Header;
