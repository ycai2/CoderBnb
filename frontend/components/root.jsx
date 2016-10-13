import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import SearchContainer from './search_result/search_container';
import SpotForm from './spot_form/spot_form_container';
import SpotShowContainer from './spot/spot_show_container';
import BookingIndexContainer from './booking/booking_index_container';
import BookingShowcontainer from './booking/booking_show_container';


const Root = ({ store }) => {
  const _ensureLoggedIn = () => {
    if (!store.getState().session.currentUser) {
      hashHistory.goBack();
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer} />
          <Route path="/spots" component={SearchContainer} />
          <Route path="/spots/new" component={SpotForm} onEnter={_ensureLoggedIn} />
          <Route path="/spots/:spotId" component={SpotShowContainer} />
          <Route path="/bookings" component={BookingIndexContainer} onEnter={_ensureLoggedIn}>
            <Route path="/bookings/:bookingId" component={BookingShowContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
