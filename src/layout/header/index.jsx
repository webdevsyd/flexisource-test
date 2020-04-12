import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import classes from './header.module.css';

const Header = () => {
  return (
    <Grid className={classes.container}>
      <Row>
        <Col xs={6} lg={6}>
          <Logo />
        </Col>
        <Col xs={6} lg={6}>
          <ul className={classes.menu}>
            <li>
              <a href="/">Culture</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Clients</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header;
