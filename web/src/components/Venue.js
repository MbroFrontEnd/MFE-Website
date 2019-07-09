import React from 'react';
import styled from 'styled-components';

import { HeadingBravo } from '../components/Headings';
import { Text } from '../components/Text';
import { Section } from '../components/Section';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: middle;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const StyledAside = styled.aside`
  margin-right: 40px;
`;

const StyledAddress = styled.address`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: #97daf7;
`;

const StyledH4 = styled.h4`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #FFFFFF:
`;

const StyledImg = styled.img`
  max-width: 375px;
`;

const StyledSvg = styled.img`
  margin-right: 1.5rem;
`;

const Venue = () => (
  <Section>
    <StyledHeader>
      <StyledSvg
        src={require('../assets/icons/location.svg')}
        alt="Location"
        width="32"
        height="32"
      />
      <HeadingBravo marginBottom="0">Venue</HeadingBravo>
    </StyledHeader>
    <StyledDiv>
      <StyledAside>
        <StyledH4>Hit The Bar, Middlesbrough</StyledH4>
        <Text>
          We are joined by some good friends from another part of the country
          who have taken the time to come along and speak to us about this
          amazing static site architecture. Jamie absolutely loves it and he
          doesn’t shut up about it and it does everybody’s head in.
        </Text>
        <StyledAddress>
          Hit The Bar, Bridge Street East, Middlesbrough
        </StyledAddress>
      </StyledAside>
      <StyledImg
        src={require('../assets/images/hit-the-bar.jpg')}
        alt="Hit The Bar"
      />
    </StyledDiv>
  </Section>
);

export default Venue;
