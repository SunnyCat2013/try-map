import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  render () {
    return (
      <div>
        hello webpack & react.
      </div>
    );
  }
}


ReactDOM.render(
  <Counter />,
  document.getElementById('map')
);
