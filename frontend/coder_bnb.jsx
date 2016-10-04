import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login } from './actions/session_actions';
import { logout } from './util/session_api_util';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store = configureStore();
    if (window.currentUser) {
      const preloadedState = {
        session: {
          currentUser: window.currentUser,
          errors: []
        }

      };
      store = configureStore(preloadedState);
    }
    window.store = store;
    ReactDOM.render(<Root store={store} />, root);
});
