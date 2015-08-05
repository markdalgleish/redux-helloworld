import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../flux/actionCreators';
import Counter from '../components/Counter';

@connect(state => ({ count: state.count }))
class Root extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { count, dispatch } = this.props;

    return (
      <div>
        <main>
          <Counter
            count={count}
            increment={() => dispatch(increment())}
            decrement={() => dispatch(decrement())}
            />
        </main>
      </div>
    );
  }
};

export default Root;
