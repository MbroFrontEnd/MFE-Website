import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const SiteLayout = ({ children, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} />
    <div>{children}</div>
    <Footer />
  </>
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string.isRequired
};

export default SiteLayout;
