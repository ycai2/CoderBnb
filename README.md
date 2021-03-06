# Coderbnb

[Coderbnb live][live_link]

[live_link]: https://www.coderbnb.info

  CoderBnB is a web application inspired by Airbnb built with Ruby on Rails, and React/Redux. The idea is to group coders together and code all night. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Spot Listing And Map

  User can selectively see spots in the spot index view. There are two components in the spot index view: search result and map view. The search result lists all spots and provides different robust filters to help user choose spot to stay.
  ![result1] (docs/screenshots/result-2.png)<br>
  The date picker implements Airbnb's official DateRangePicker component.
  ![result2] (docs/screenshots/result-1.png)<br>

### Spot Filtering Requests
  React components at frontend can dispatch filtering actions when user changes filters. Those filtering actions are processed at backend with Active Record and PostgreSQL queries, including resolving overlapping requests and Google Map boundaries.
  ![code1] (docs/screenshots/code-1.png)<br>
  ![code2] (docs/screenshots/code-2.png)<br>

### Bookings

In the backend, bookings are created linking a user and a spot, referring to the action of requesting a booking. At `/spots/:spotId`, user can see all information about a spot and booking request window on right-hand-side. Using the date picker, user can pick dates to prefill other booking information, such as total price and duration of stay. Once "Request a Booking" is clicked, a booking will be created.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Coderbnb are outlined below.

### Editing

Editing spots should be a option to implement so users can modify their posting's photos and descriptions according to past reviews.
