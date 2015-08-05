import React from 'react';
import { Route } from 'react-router';

import Root from './handlers/Root';

export default (
  <Route name="root" path="/" handler={Root} />
);
