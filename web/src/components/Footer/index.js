import React from 'react';
import styled from 'styled-components';

import Sponsors from './Sponsors';

const StyledFooter = styled.footer`
  padding: 1.5rem;
  font-size: 1.125rem;
  background-color: ${props => props.theme.footer.backgroundColor};
`;

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1250px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledP = styled.p`
  margin: 0 0 0.25rem 0;

  &:last-child {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const StyledA = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  transition: opacity 0.25s linear;

  &:hover {
    opacity: 0.75;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <div>
          <StyledP>
            Built with{' '}
            <strong>
              <StyledA href="https://www.gatsbyjs.org/">Gatsby</StyledA>
            </strong>
            ,{' '}
            <strong>
              <StyledA href="https://www.sanity.io/">Sanity</StyledA>
            </strong>{' '}
            and hosted on{' '}
            <strong>
              <StyledA href="https://www.netlify.com/">Netlify</StyledA>
            </strong>
          </StyledP>
          <StyledP>
            Learn more about{' '}
            <strong>
              <StyledA href="https://jamstack.org/">JAMStack</StyledA>
            </strong>
          </StyledP>
        </div>
        <Sponsors>
          <a href="https://www.sanity.io/">
            <img
              src={require('../../assets/images/sponsors/sanity.png')}
              alt="Sanity"
              width="153"
              height="31"
            />
          </a>
          <a href="https://endeavour-digital.com/">
            <img
              src={require('../../assets/images/sponsors/endeavour.png')}
              alt="Endeavour Digital"
              width="114"
              height="42"
            />
          </a>
          <img
            src={require('../../assets/images/sponsors/26dev.svg')}
            alt="26dev Limited"
            width="40"
            height="40"
          />
        </Sponsors>
      </StyledDiv>
    </StyledFooter>
  );
};

export default Footer;
