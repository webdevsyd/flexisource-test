import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import data from '../data/data.json';

import Question from './question';
import classes from './article.module.css';

const ArticlePage = ({ match }) => {
  const article = data.find((item) => item.slug === match.params.slug);
  return (
    <Grid className={classes.container}>
      <Row className={classes.row}>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className={classes.imageContainer}>
            <img alt="" src={require(`../assets/${article.image}`)} className={classes.image} />
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <div className={classes.content}>
            <h1 className={classes.title}>{article.title_long}</h1>
            {article.questions.map((question, index) => (
              <Question question={question} counter={index} key={question} />
            ))}
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

ArticlePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ArticlePage;
