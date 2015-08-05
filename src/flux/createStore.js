import { createStore } from 'redux';

import reducer from './reducer';

export default (data) => {
  return createStore(reducer, data);
}
