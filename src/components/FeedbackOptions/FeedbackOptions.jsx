import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './stylesFeedbackOptions.module.css';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
      className={Styles.btn}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
      key={option}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
