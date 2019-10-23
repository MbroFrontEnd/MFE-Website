import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../containers/layout';
import Main from '../components/Main';
import serializers from '../serializers';

export const query = graphql`
  query CodeOfConductQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    content: sanityPage(slug: { current: { eq: "code-of-conduct" } }) {
      title
      _rawBody
    }
  }
`;

const StyledMain = styled(Main)`
  a {
    color: ${props => props.theme.text.color};
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default ({ data }) => (
  <Layout>
    <SEO
      title={`${data.site.title} - Code of Conduct`}
      description={data.site.description}
      keywords={data.site.keywords}
    />

    <StyledMain>
      <BlockContent blocks={data.content._rawBody} serializers={serializers} />
    </StyledMain>
  </Layout>
);
