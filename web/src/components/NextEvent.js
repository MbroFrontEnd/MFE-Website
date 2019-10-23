import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import { HeadingAlpha } from '../components/Headings';
import { Event } from '../components/Event';
import { Section } from '../components/Section';
import { ButtonLink } from '../components/Link';
import { Text } from '../components/Text';

import { getFeaturedEvent } from '../hooks/getFeaturedEvent';
import serializers from '../serializers';

const StyledTime = styled.time`
  font-size: 3rem;
  color: ${props => props.theme.text.color};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledAddress = styled.address`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: ${props => props.theme.text.color};
  font-style: normal;
  align-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const LocationIcon = styled.img`
  margin-right: 1rem;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${Text} {
    text-align: justify;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const NextEvent = () => {
  const event = getFeaturedEvent();

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
        Boho One, Middlesbrough
      </StyledAddress>

      {event._rawIntroduction && (
        <BlockContent
          blocks={event._rawIntroduction}
          serializers={serializers}
        />
      )}

      <EventContainer>
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
      </EventContainer>

      {event.ticketLink && (
        <ButtonContainer>
          <ButtonLink href={event.ticketLink} target="_blank" rel="noreferrer">
            Get Your Ticket
          </ButtonLink>
        </ButtonContainer>
      )}
    </Section>
  );
};

export default NextEvent;
