import React, { Component } from 'react';

import Styles from './votesStyles.module.css';

class Votes extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // static defaultProps = {}
  // static propTypes = {}

  handleClick(evt) {
    console.log('Increment button was clicked!', evt); // работает
    // console.log('this.props: ', this.props); // работает
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className={Styles.btn} key="good">
          Good
        </button>
        <button className={Styles.btn} key="neutral">
          Neutral
        </button>
        <button className={Styles.btn} key="bad">
          Bad
        </button>
      </div>
    );
  }
}

export default Votes;
