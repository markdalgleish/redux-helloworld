import { createStore } from 'redux';

import reducer from './reducers/reducer';

export default (data) => {
  return createStore(reducer, data);
}
