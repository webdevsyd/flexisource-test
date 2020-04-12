import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import classes from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
