import React from 'react';
import styled from 'styled-components';

import { HeadingBravo } from '../components/Headings';
import { ButtonAlpha } from '../components/Buttons';
import { Input, Textarea } from '../components/Input';
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

const CallForSpeakers = () => (
  <Section>
    <StyledHeader>
      <StyledSvg
        src={require('../assets/icons/megaphone.svg')}
        alt="Call For Speakers"
        width={32}
        height={32}
      />
      <HeadingBravo marginBottom="0">Call For Speakers</HeadingBravo>
    </StyledHeader>

    <Text>
      We’re always on the look out for speakers, especially those from the
      Middlesbrough area. If you would like to come along to our friendly meetup
      and talk about something you have learned or something you have
      experienced then please complete the form below and we’ll get back to you.
    </Text>
    <form>
      <Input type="text" name="name" placeholder="Your Name" />
      <Input type="email" name="email" placeholder="Email Address" />
      <Input type="twitter" name="twitter" placeholder="Twitter Handler" />
      <Textarea
        name="description"
        rows="5"
        placeholder="Tell us about your talk..."
      />
      <ButtonAlpha type="submit">Submit</ButtonAlpha>
    </form>
  </Section>
);

export default CallForSpeakers;
