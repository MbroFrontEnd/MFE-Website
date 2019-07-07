import React from 'react';
import styled from 'styled-components';

import { HeadingBravo } from '../components/Headings';
import { Event } from '../components/Event';
import { ButtonAlpha } from '../components/Buttons';
import { Text } from '../components/Text';
import { Section } from '../components/Section';

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const StyledSvg = styled.img`
  margin-right: 1.5rem;
`;

const PreviousEvents = () => (
  <Section>
    <StyledHeader>
      <StyledSvg
        src={require('../assets/icons/cal.svg')}
        alt="Previous Events"
        width="32"
        height="32"
      />
      <HeadingBravo marginBottom="0">Previous Events</HeadingBravo>
    </StyledHeader>

    <Event title="My Amazing Talk" speaker="By Speaker Number One">
      <Text>
        We are joined by some good friends from another part of the country who
        have taken the time to come along and speak to us about this amazing
        static site architecture. Jamie absolutely loves it and he doesn’t shut
        up about it and it does everybody’s head in.
      </Text>
      <ButtonAlpha>View</ButtonAlpha>
    </Event>

    <Event title="My Amazing Talk" speaker="By Speaker Number One">
      <Text>
        We are joined by some good friends from another part of the country who
        have taken the time to come along and speak to us about this amazing
        static site architecture. Jamie absolutely loves it and he doesn’t shut
        up about it and it does everybody’s head in.
      </Text>
      <ButtonAlpha>View</ButtonAlpha>
    </Event>
  </Section>
);

export default PreviousEvents;
