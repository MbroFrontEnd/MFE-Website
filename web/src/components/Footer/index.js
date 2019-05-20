import React from 'react';
import styled from 'styled-components';

import Sponsors from './Sponsors';

const StyledFooter = styled.footer`
  padding: 1.5rem;
  font-size: 1.125rem;
  color: ${props => props.theme.text.color};
  background-color: ${props => props.theme.footer.backgroundColor};
`;

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1250px;
  justify-content: space-between;
  align-items: center;
`;

const StyledP = styled.p`
  margin: 0 0 0.25rem 0;

  &:last-child {
    margin: 0;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledDiv>
        <div>
          <StyledP>
            Built with <strong>Gatsby</strong>, <strong>Sanity</strong> and
            hosted on <strong>Netlify</strong>
          </StyledP>
          <StyledP>
            Learn more about <strong>JAMStack</strong>
          </StyledP>
        </div>
        <Sponsors>
          <img
            src={require('../../assets/images/sponsors/sanity.png')}
            alt="Sanity"
            width="153"
            height="31"
          />
          <img
            src={require('../../assets/images/sponsors/endeavour.png')}
            alt="Endeavour Digital"
            width="114"
            height="42"
          />
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
}

export default Footer;
