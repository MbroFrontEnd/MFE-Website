import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import { HeadingAlpha } from '../components/Headings';
import { Event } from '../components/Event';
import { Text } from '../components/Text';
import { Section } from '../components/Section';

import { getFeaturedEvent } from '../hooks/getFeaturedEvent';
import serializers from '../serializers';

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

const NextEvent = () => {
  const event = getFeaturedEvent();
  console.log('event', event);
  return (
    <Section>
      <StyledTime>{event.eventDate}</StyledTime>
      <HeadingAlpha>{event.name}</HeadingAlpha>

      <StyledAddress>
        <LocationIcon
          src={require('../assets/icons/location.svg')}
          width="24"
          height="24"
          alt="Location"
        />
        Hit The Bar, Middlesbrough
      </StyledAddress>

      {event._rawIntroduction && (
        <BlockContent
          blocks={event._rawIntroduction}
          serializers={serializers}
        />
      )}

      {event.talks.map(talk => (
        <Event title={talk.title} speaker={talk.speaker.name} key={talk._key}>
          {talk._rawSynopsis && (
            <BlockContent
              blocks={talk._rawSynopsis}
              serializers={serializers}
            />
          )}
        </Event>
      ))}
    </Section>
  );
};

export default NextEvent;
