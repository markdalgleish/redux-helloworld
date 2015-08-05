import React from 'react';
import Router from 'react-router';
import { Provider } from 'react-redux';

import Routes from './routes';
import createStore from './flux/createStore';

// Client render
if (typeof document !== 'undefined') {
  const store = createStore(window.__redux_data__);

  Router.run(Routes, Router.HistoryLocation, function(Handler) {
    React.render((
      <Provider store={store}>
        {() => <Handler />}
      </Provider>
    ), document.getElementById('outlet'));
  });
}

// Render function for static-site-generator-webpack-plugin
export default function(locals, callback) {
  const store = createStore();

  Router.run(Routes, locals.path, function(Handler) {
    callback(null, locals.template({
      html: React.renderToString(
        <Provider store={store}>
          {() => <Handler />}
        </Provider>
      ),
      data: store.getState(),
      assets: locals.assets
    }));
  });
};
