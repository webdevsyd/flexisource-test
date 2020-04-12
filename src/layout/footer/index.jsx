import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import classes from './footer.module.css';

const Footer = () => {
  return (
    <Grid className={classes.container}>
      <Row>
        <Col xs={6} lg={6}>
          <Logo />
        </Col>
        <Col xs={6} lg={6}>
          <ul className={classes.menu}>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Linkedin</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Grid>
  );
};

export default Footer;
