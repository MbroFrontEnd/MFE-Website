import React from 'react';

import { HeadingBravo } from '../components/Headings';
import { ButtonAlpha } from '../components/Buttons';

const CallForSpeakers = () => (
  <section>
    <HeadingBravo>Call For Speakers</HeadingBravo>
    <p>
      We’re always on the look out for speakers, especially those from the
      Middlesbrough area. If you would like to come along to our friendly meetup
      and talk about something you have learned or something you have
      experienced then please complete the form below and we’ll get back to you.
    </p>
    <form>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Email Address" />
      <input type="twitter" name="twitter" placeholder="Twitter Handler" />
      <textarea name="description" rows="5" />
      <ButtonAlpha type="submit" placeholder="Tell us about your talk...">
        Submit
      </ButtonAlpha>
    </form>
  </section>
);

export default CallForSpeakers;
