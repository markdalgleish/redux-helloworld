import React, { Component, PropTypes } from 'react';

export default class TodoList extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }

  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <div>Count: {count}</div>
      </div>
    );
  }
};
