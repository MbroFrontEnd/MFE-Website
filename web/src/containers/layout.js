import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from '../styles/theme';
import Layout from '../components/Layout';

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      background-color ${props => props.theme.backgroundColor}
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StaticQuery
          query={query}
          render={data => {
            if (!data.site) {
              throw new Error(
                'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
              );
            }
            return <Layout {...props} siteTitle={data.site.title} />;
          }}
        />
      </>
    </ThemeProvider>
  );
}

export default LayoutContainer;
