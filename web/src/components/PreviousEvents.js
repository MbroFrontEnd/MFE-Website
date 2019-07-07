import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

/**
 * Hooks for acquiring GraphQL Data
 */
import { getPreviousEvents } from '../hooks/getPreviousEvents';
import styled from 'styled-components';

import { HeadingBravo } from '../components/Headings';
import { Event } from '../components/Event';
import { ButtonAlpha } from '../components/Buttons';
import { Section } from '../components/Section';

import serializers from '../serializers';

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const StyledSvg = styled.img`
  margin-right: 1.5rem;
`;

const PreviousEvents = () => {
  const events = getPreviousEvents();
  console.log('events', events);

  return (
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
      {events.map(event => (
        <Event title={event.node.name} key={event.node.id}>
          {event.node._rawIntroduction && (
            <BlockContent
              blocks={event.node._rawIntroduction}
              serializers={serializers}
            />
          )}
          <ButtonAlpha>View</ButtonAlpha>
        </Event>
      ))}
    </Section>
  );
};

export default PreviousEvents;
