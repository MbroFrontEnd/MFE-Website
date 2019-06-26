import React from 'react';

import { HeadingBravo } from '../components/Headings';
import { Text } from '../components/Text';
import { Section } from '../components/Section';

const Venue = () => (
  <Section>
    <HeadingBravo>Venue</HeadingBravo>
    <Text>Hit The Bar, Middlesbrough</Text>
    <img src="https://placehold.it/750" width="375" />
    <address>Hit The Bar, Bridge Street East, Middlesbrough</address>
  </Section>
);

export default Venue;
