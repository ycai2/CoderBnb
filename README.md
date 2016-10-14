# Coderbnb

[Coderbnb live][heroku]

[heroku]: http://coder-bnb.herokuapp.com

  CoderBnB is a web application inspired by Airbnb built with Ruby on Rails, and React/Redux. The idea is to group coders together and code all night. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Spot Listing And Map

  User can selectively see spots in the spot index view. There are two components in the spot index view: search result and map view. The search result lists all spots and provides different robust filters to help user choose spot to stay.
  ![result screenshot](docs/screenshots/result-1.jpg)

  The date picker implements Airbnb's official DateRangePicker component.
  ![result-dates screenshot](docs/screenshots/result-1.jpg)

  

### Bookings

In the backend, bookings are created linking a user and a spot, referring to the action of requesting a booking. At `/spots/:spotId`, user can see all information about a spot and booking request window on right-hand-side. Using the date picker, user can pick dates to prefill other booking information, such as total price and duration of stay. Once "Request a Booking" is clicked, a booking will be created.
![spot-show screenshot](docs/screenshots/show-1.jpg)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
