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

  // handleClick() {
  //   this.setState(prevState => {
  //     console.log(prevState.good);
  //     return { value: prevState.good + 1 };
  //   });
  // }
  handleClick(evt) {
    console.log('click to good', evt);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className={Styles.btn} key="good">
          Good
        </button>
        {/* <button onClick={this.handleClick} className={Styles.btn} key="good">
          Good
        </button> */}
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
