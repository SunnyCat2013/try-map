import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0
    };

    this.addFun = this.addFun.bind(this);
    this.minFun = this.minFun.bind(this);
  }

  addFun() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  minFun() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.addFun}>+</button>
        {this.state.counter}
        <button onClick={this.minFun}>-</button>
      </div>
    );
  }
}

export { Counter };
