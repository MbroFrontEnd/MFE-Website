import React from 'react';

import { HeadingBravo } from '../components/Headings';
import { Event } from '../components/Event';
import { ButtonAlpha } from '../components/Buttons';

const PreviousEvents = () => (
  <section>
    <HeadingBravo>Previous Events</HeadingBravo>

    <Event title="My Amazing Talk" speaker="By Speaker Number One">
      <p>
        We are joined by some good friends from another part of the country who
        have taken the time to come along and speak to us about this amazing
        static site architecture. Jamie absolutely loves it and he doesn’t shut
        up about it and it does everybody’s head in.
      </p>
      <ButtonAlpha>View</ButtonAlpha>
    </Event>

    <Event title="My Amazing Talk" speaker="By Speaker Number One">
      <p>
        We are joined by some good friends from another part of the country who
        have taken the time to come along and speak to us about this amazing
        static site architecture. Jamie absolutely loves it and he doesn’t shut
        up about it and it does everybody’s head in.
      </p>
      <ButtonAlpha>View</ButtonAlpha>
    </Event>
  </section>
);

export default PreviousEvents;
