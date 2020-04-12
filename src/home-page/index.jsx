import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import data from '../data/data.json';

import ListItem from './list-item';
import classes from './home.module.css';

const HomePage = () => {
  return (
    <Grid className={classes.container}>
      <Row>
        {data.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </Row>
    </Grid>
  );
};

export default HomePage;
