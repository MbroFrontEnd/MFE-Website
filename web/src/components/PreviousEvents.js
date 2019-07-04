import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

/**
 * Hooks for acquiring GraphQL Data
 */
import { getPreviousEvents } from '../hooks/getPreviousEvents';

import { HeadingBravo } from '../components/Headings';
import { Event } from '../components/Event';
import { ButtonAlpha } from '../components/Buttons';
import { Section } from '../components/Section';

import serializers from '../serializers';

const PreviousEvents = () => {
  const events = getPreviousEvents();

  console.log('events', events);

  return (
    <Section>
      <HeadingBravo>Previous Events</HeadingBravo>
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
