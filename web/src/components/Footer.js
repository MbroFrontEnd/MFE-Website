import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 1.5rem;
  background-color: ${props => props.theme.footer.backgroundColor};
`;

function Footer() {
  return (
    <StyledFooter>
      <>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.sanity.io">Sanity</a> &{` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </>
    </StyledFooter>
  );
}

export default Footer;
