import React from 'react';
import styled from 'styled-components';

import { HeadingAlpha } from '../components/Headings';
import { Event } from '../components/Event';
import { Text } from '../components/Text';
import { Section } from '../components/Section';

const StyledTime = styled.time`
  font-size: 3rem;
  color: ${props => props.theme.text.color};
`;

const StyledAddress = styled.address`
  display: flex;
  margin-top: 16px;
  margin-bottom: 64px;
  font-size: 1.5rem;
  color: ${props => props.theme.text.color};
  font-style: normal;
  align-content: center;
`;

const LocationIcon = styled.img`
  margin-right: 1rem;
`;

function NextEvent() {
  return (
    <Section>
      <StyledTime>27th June</StyledTime>
      <HeadingAlpha>A Night of JAMStack</HeadingAlpha>
      <StyledAddress>
        <LocationIcon
          src={require('../assets/icons/location.svg')}
          width="24"
          height="24"
          alt="Location"
        />
        Hit The Bar, Middlesbrough
      </StyledAddress>

      <Text>
        We are joined by some good friends from another part of the country who
        have taken the time to come along and speak to us about this amazing
        static site architecture. Jamie absolutely loves it and he doesn’t shut
        up about it and it does everybody’s head in.
      </Text>

      <Event title="My Amazing Talk" speaker="By Speaker Number One">
        <Text>
          We are joined by some good friends from another part of the country
          who have taken the time to come along and speak to us about this
          amazing static site architecture. Jamie absolutely loves it and he
          doesn’t shut up about it and it does everybody’s head in.
        </Text>
      </Event>

      <Event title="My Amazing Talk" speaker="By Speaker Number One">
        <Text>
          We are joined by some good friends from another part of the country
          who have taken the time to come along and speak to us about this
          amazing static site architecture. Jamie absolutely loves it and he
          doesn’t shut up about it and it does everybody’s head in.
        </Text>
      </Event>
    </Section>
  );
}

export default NextEvent;