import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import NextEvent from '../components/NextEvent';
import PreviousEvents from '../components/PreviousEvents';
import Venue from '../components/Venue';
import CallForSpeakers from '../components/CallForSpeakers';

const StyledMain = styled.main`
  margin: 0 auto 5rem auto;
  max-width: 840px;
`;

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
      <StyledMain>
        <NextEvent />
        <PreviousEvents />
        <Venue />
        <CallForSpeakers />
      </StyledMain>
    </Layout>
  );
};

export default IndexPage;
