import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../containers/layout';
import Main from '../components/Main';
import { Text } from '../components/Text';

export const query = graphql`
  query CodeOfConductQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

export default ({ data }) => (
  <Layout>
    <SEO
      title={`${data.site.title} - Code of Conduct`}
      description={data.site.description}
      keywords={data.site.keywords}
    />

    <Main>
      <section>
        <Text>
          All attendees, speakers, sponsors and volunteers at our meetup are
          required to agree with the following code of conduct. Organisers will
          enforce this code throughout the event. We expect cooperation from all
          participants to help ensure a safe environment for everybody.
        </Text>

        <h2>The Quick Version</h2>

        <Text>
          Our meetup is dedicated to providing a harassment-free meetup
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, ethnicity, religion (or lack thereof), or technology
          choices. We do not tolerate harassment of meetup participants in any
          form. Sexual language and imagery is not appropriate for any meetup
          venue, including talks, workshops, parties, Twitter and other online
          media. Meetup participants violating these rules may be sanctioned or
          expelled from the meetup at the discretion of the meetup organisers.
        </Text>

        <h2>The Less Quick Version</h2>

        <Text>
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, age, sexual orientation, disability,
          physical appearance, body size, race, ethnicity, religion, technology
          choices, sexual images in public spaces, deliberate intimidation,
          stalking, following, harassing photography or recording, sustained
          disruption of talks or other events, inappropriate physical contact,
          and unwelcome sexual attention.
        </Text>

        <Text>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </Text>

        <Text>
          Sponsors are also subject to the anti-harassment policy. In
          particular, sponsors should not use sexualised images, activities, or
          other material. Booth staff (including volunteers) should not use
          sexualised clothing/uniforms/costumes, or otherwise create a
          sexualised environment.
        </Text>

        <Text>
          If a participant engages in harassing behavior, the meetup organisers
          may take any action they deem appropriate, including warning the
          offender or expulsion from the meetup.
        </Text>

        <Text>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact a member of meetup staff
          immediately. Meetup staff can be identified as they'll be wearing
          branded clothing and/or badges.
        </Text>

        <Text>
          Meetup staff will be happy to help participants contact hotel/venue
          security or local law enforcement, provide escorts, or otherwise
          assist those experiencing harassment to feel safe for the duration of
          the meetup. We value your attendance.
        </Text>

        <Text>
          We expect participants to follow these rules at meetup and workshop
          venues and meetup-related social events.
        </Text>

        <Text>
          Original source and credit:{' '}
          <a href="http://2012.jsconf.us/#/about">
            http://2012.jsconf.us/#/about
          </a>{' '}
          &amp; The Ada Initiative
          <br />
          Please help by translating or improving:{' '}
          <a href="http://github.com/leftlogic/confcodeofconduct.com">
            http://github.com/leftlogic/confcodeofconduct.com
          </a>
          <br />
          This work is licensed under a Creative Commons Attribution 3.0
          Unported License
        </Text>
      </section>
    </Main>
  </Layout>
);
