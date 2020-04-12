import React from 'react';
import PropTypes from 'prop-types';

import classes from './question.module.css';

const Question = ({ question, counter }) => {
  return (
    <>
      <span className={classes.title}>{`Question ${parseInt(counter, 10) + 1}`}</span>
      <p className={classes.content}>{question}</p>
    </>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Question;
