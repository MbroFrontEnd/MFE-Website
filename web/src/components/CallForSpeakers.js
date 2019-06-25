import React from 'react';

import { HeadingBravo } from '../components/Headings';
import { ButtonAlpha } from '../components/Buttons';
import { Input, Textarea } from '../components/Input';
import { Text } from '../components/Text';
import { Section } from '../components/Section';

const CallForSpeakers = () => (
  <Section>
    <HeadingBravo>Call For Speakers</HeadingBravo>
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
