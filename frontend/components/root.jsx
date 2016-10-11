import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import SearchContainer from './search_result/search_container';
import SpotForm from './spot_form/spot_form_container';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer} />
          <Route path="/spots" component={SearchContainer} />
          <Route path="/spots/new" component={SpotForm} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
