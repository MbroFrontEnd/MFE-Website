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

const PreviousEvents = () => {
  const events = getPreviousEvents();

  return (
    <Section>
      <HeadingBravo>Previous Events</HeadingBravo>
      {events.map(event => (
        <Event title={event.node.name}>
          {event.node._rawIntroduction && (
            <BlockContent blocks={event.node._rawIntroduction} />
          )}
          <ButtonAlpha>View</ButtonAlpha>
        </Event>
      ))}
    </Section>
  );
};

export default PreviousEvents;
