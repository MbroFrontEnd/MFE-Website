import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Nav from './Nav';
import NavItem, { NavItemLink } from './NavItem';

const StyledHeader = styled.header`
  margin: 0 auto 7rem auto;
  padding: 4rem 1.5rem 0 1.5rem;
  display: flex;
  max-width: 980px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2.5rem;
    padding-top: 2rem;

    img {
      margin-bottom: 1.75rem;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img
        src={require('../assets/images/logo.svg')}
        alt={siteTitle}
        width="220"
        height="60"
      />
    </Link>
    <Nav>
      <NavItemLink to="/code-of-conduct">Code of Conduct</NavItemLink>
      <NavItem
        href="https://join.slack.com/t/middlesbroughfrontend/shared_invite/enQtODA3OTMyNTI4ODgwLWE5ZjQ0YjM4MzFmN2RkYTFhNjAzZTc2NjI2YmJmNDIwNjgxODdkZWVlMjJmZGJjZTNiMWI2NDhkNmIxYjYwNTE"
        target="_blank"
        rel="noreferrer"
      >
        Slack
      </NavItem>
      <NavItem
        href="https://github.com/MbroFrontEnd"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </NavItem>
    </Nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Header;
