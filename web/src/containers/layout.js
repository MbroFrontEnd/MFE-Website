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
    @font-face {
      font-family: 'Inter';
      src: url(${require('../assets/fonts/Inter-Regular.woff')}) format("woff"),
        url(${require('../assets/fonts/Inter-Regular.woff2')}) format("woff2");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: 'Inter';
      src: url(${require('../assets/fonts/Inter-SemiBold.woff')}) format("woff"),
        url(${require('../assets/fonts/Inter-SemiBold.woff2')}) format("woff2");
      font-style: normal;
      font-weight: 600;
      font-display: swap;
    }

    @font-face {
      font-family: 'Inter';
      src: url(${require('../assets/fonts/Inter-Bold.woff')}) format("woff"),
        url(${require('../assets/fonts/Inter-Bold.woff2')}) format("woff2");
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      color: ${props => props.theme.text.color};
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
