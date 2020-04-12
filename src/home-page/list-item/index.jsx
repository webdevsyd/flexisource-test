import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import classes from './list-item.module.css';

const ListItem = ({ item }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} className={classes.column}>
      <div className={classes.card}>
        <div className={classes.photoWrapper}>
          <img alt="" src={require(`../../assets/${item.thumb}`)} className={classes.photo} />
          <span className={classes.photoLabel}>{item.tag.toUpperCase()}</span>
        </div>
        <h1>{item.title}</h1>
        <Link to={`/article/${item.slug}`} className={classes.link}>
          <div className={classes.line} />
          <span className={classes.view}>VIEW CASE STUDY</span>
        </Link>
      </div>
    </Col>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
