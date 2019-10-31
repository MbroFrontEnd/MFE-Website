import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { HeadingBravo } from '../components/Headings';
import { Text } from '../components/Text';
import { Section } from '../components/Section';
import { getVenue } from '../hooks/getVenue';

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

const StyledSvg = styled.img`
  margin-right: 1.5rem;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: underline;
`;

const Venue = () => {
  const venues = getVenue();

  return (
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
      {venues.map(venue => (
        <StyledDiv key={venue.node.id}>
          <StyledAside>
            <StyledH4>
              {venue.node.address.building}, {venue.node.address.town}
            </StyledH4>
            <Text>{venue.node.description}</Text>

            <Text>
              <StyledLink href={venue.node.mapLink}>
                Find {venue.node.name} on Google Maps
              </StyledLink>
            </Text>
            <StyledAddress>
              {venue.node.address.building}, {venue.node.address.street},{' '}
              {venue.node.address.town}, {venue.node.address.postcode}
            </StyledAddress>
          </StyledAside>
          <Img fixed={venue.node.image.asset.fluid} alt={venue.node.name} />
        </StyledDiv>
      ))}
    </Section>
  );
};

export default Venue;
