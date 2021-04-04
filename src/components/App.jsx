import React from 'react';

import Votes from './Votes';

import '../styles.css';

const App = () => (
  <div>
    <h2>Please leave feedback</h2>
    <Votes />
    <h2>Statistics</h2>
    {/* <Com2/> */}
    No feedback given
    {/* Good:
    Neutral:
    Bad:
    Total:
    Possitive feedback: % */}
  </div>
);

export default App;
