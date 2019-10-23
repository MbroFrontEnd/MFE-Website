import React from 'react';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import NextEvent from '../components/NextEvent';
import PreviousEvents from '../components/PreviousEvents';
import Venue from '../components/Venue';
import CallForSpeakers from '../components/CallForSpeakers';
import Main from '../components/Main';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Main>
        <NextEvent />
        <PreviousEvents />
        <Venue />
        <CallForSpeakers />
      </Main>
    </Layout>
  );
};

export default IndexPage;
