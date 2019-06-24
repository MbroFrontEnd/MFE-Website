import React from 'react';

const CallForSpeakers = () => (
  <section>
    <h3>Call For Speakers</h3>
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
      <input
        type="submit"
        value="Submit"
        placeholder="Tell us about your talk..."
      />
    </form>
  </section>
);

export default CallForSpeakers;
