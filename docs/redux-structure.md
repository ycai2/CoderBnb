# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Spot Cycles

### Spots API Request Actions

* `fetchAllSpots`
  0. invoked from `SpotsIndex` `componentDidMount`/`willReceiveProps`
  0. `GET /api/spots` is called.
  0. `receiveAllSpots` is set as the success callback.

* `createSpot`
  0. invoked from new note button `onClick`
  0. `POST /api/spots` is called.
  0. `receiveSingleSpot` is set as the success callback.

* `fetchSingleSpot`
  0. invoked from `SpotDetail` `componentDidMount`/`willReceiveProps`
  0. `GET /api/spots/:id` is called.
  0. `receiveSingleSpot` is set as the success callback.

* `updateSpot`
  0. invoked from `SpotForm` `onSubmit`
  0. `POST /api/spots` is called.
  0. `receiveSingleSpot` is set as the success callback.

* `destroySpot`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/spots/:id` is called.
  0. `removeSpot` is set as the success callback.

### Spot API Response Actions

* `receiveAllSpots`
  0. invoked from an API callback
  0. the `SpotReducer` updates `spots` in the application's state.

* `receiveSingleSpot`
  0. invoked from an API callback
  0. the `SpotReducer` updates `spots[id]` in the application's state.

* `removeSpot`
  0. invoked from an API callback
  0. the `SpotReducer` removes `spots[id]` from the application's state.

## Booking Cycles

### Bookings API Request Actions

* `fetchAllBookings`
  0. invoked from `BookingsIndex` `componentDidMount`/`willReceiveProps`
  0. `GET /api/bookings` is called.
  0. `receiveAllBookings` is set as the success callback.

* `createBooking`
  0. invoked from new booking button `onClick`
  0. `POST /api/bookings` is called.
  0. `receiveSingleBooking` is set as the callback.

* `fetchSingleBooking`
  0. invoked from `BookingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/bookings` is called.
  0. `receiveSingleBooking` is set as the success callback.

* `updateBooking`
  0. invoked from `BookingForm` `onSubmit`
  0. `POST /api/bookings` is called.
  0. `receiveSingleBooking` is set as the success callback.

* `destroyBooking`
  0. invoked from delete booking button `onClick`
  0. `DELETE /api/bookings/:id` is called.
  0. `removeBooking` is set as the success callback.

### Bookings API Response Actions

* `receiveAllBookings`
  0. invoked from an API callback.
  0. The `Booking` reducer updates `bookings` in the application's state.

* `receiveSingleBooking`
  0. invoked from an API callback.
  0. The `Booking` reducer updates `bookings[id]` in the application's state.

* `removeBooking`
  0. invoked from an API callback.
  0. The `Booking` reducer removes `bookings[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SpotSearchBar` `onChange` when there is text
  0. `GET /api/spots` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `SpotSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
