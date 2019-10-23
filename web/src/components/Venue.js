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

  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
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

const StyledLink = styled.a`
  color: #fff;
  text-decoration: underline;
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
        <StyledH4>Boho One, Middlesbrough</StyledH4>
        <Text>
          Our meetup takes place at Boho One, situated within Middlesbrough's
          Boho Zone on Bridge Street West opposite Middlesbrough Train Station.
        </Text>

        <Text>
          <StyledLink href="https://www.google.co.uk/maps/place/Boho+One/@54.57981,-1.237898,17z/data=!3m1!4b1!4m5!3m4!1s0x487eed12e84ab68d:0xd6351d5305732e91!8m2!3d54.57981!4d-1.235704">
            Find Boho One on Google Maps
          </StyledLink>
        </Text>
        <StyledAddress>
          Boho One, Bridge Street West, Middlesbrough
        </StyledAddress>
      </StyledAside>
      <StyledImg
        src={require('../assets/images/boho-one.jpg')}
        alt="Boho One"
      />
    </StyledDiv>
  </Section>
);

export default Venue;
