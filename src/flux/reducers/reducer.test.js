import assert from 'assert';

import { increment, decrement } from '../actionCreators';
import reducer from './reducer';

describe('Scenario: Adjusting count', () => {

  const examples = [{
      initialCount: 0,
      incrementedCount: 1,
      decrementedCount: -1
    }, {
      initialCount: 36,
      incrementedCount: 37,
      decrementedCount: 35
  }];

  examples.forEach(example => {

    let state;
    let finalState;

    describe(`Given: I have a count of ${example.initialCount}`, () => {
      beforeEach(() => state = { count: example.initialCount });

      describe('When: I increment the counter', () => {
        beforeEach(() => finalState = reducer(state, increment()));

        it(`Then: it should increase the count to ${example.incrementedCount}`, () => {
          assert.equal(finalState.count, example.incrementedCount);
        });

      });

      describe('When: I decrement the counter', () => {
        beforeEach(() => finalState = reducer(state, decrement()));

        it(`Then: it should decrease the count to ${example.decrementedCount}`, () => {
          assert.equal(finalState.count, example.decrementedCount);
        });

      });

    });

  });

});
