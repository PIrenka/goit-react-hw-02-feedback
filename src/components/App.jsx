import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

import { FEEDBACK_OPTIONS } from '../data/optionsTitles';

import '../styles.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };
  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositivePercantage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedbacks();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    // console.log('this: ', this);
    // console.log('this.state: ', this.state);
    // console.log('this.countTotalFeedbacks(): ', this.countTotalFeedbacks());
    // console.log('countPositivePercantage(): ', this.countPositivePercantage());
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks();
    // const positivePercantage = this.countPositivePercantage;!!!!!!!!!!!!!!
    // console.log('without ()', this.countPositivePercantage);
    const positivePercantage = this.countPositivePercantage();
    // console.log('with ()', this.countPositivePercantage());

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercantage={positivePercantage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
