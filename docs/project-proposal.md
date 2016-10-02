# CoderBnB

[CoderBnB link][coderbnb]
[coderbnb]: [https://coder-bnb.herokuapp.com/]

## Minimum Viable Product
CoderBnB is a web application inspired by Airbnb built with Ruby on Rails, and React/Redux. The idea is to group coders together and code all night. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] Production README [link](docs/README.md)
- [ ] New account creation, login, and guest/demo login
- [ ] Listing of spots
- [ ] A dashboard to organize bookings
- [ ] Spots search (by location & availability) & Google Maps on search
- [ ] Reviews


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Spots Model, API, and components (2 days)

**Objective:** Spots can be created, read, edited and destroyed through
the API.

- [ ] `Spot` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for spots (`SpotsController`)
- [ ] JBuilder views for spots
- Note components and respective Redux loops
  - [ ] `SpotsIndex`
  - [ ] `SpotIndexItem`
  - [ ] `SpotForm`
<!-- - [ ] Autosave notes feature -->
- [ ] Style spots components
- [ ] Seed spots

### Phase 3: Bookings (2 day)

**Objective:** Bookings belongs to Users and Spots that can be created, read, edited and destroyed through the API.

- [ ] `Booking` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for booking (`BookingsController`)
- [ ] JBuilder views for bookings
- [ ] Adding a booking requires user logged in and a spot
- [ ] Viewing and modifying booking
- [ ] Canceling a booking
- [ ] Style booking components
- [ ] Seed bookings

### Phase 4: Search (2 days)

**Objective:** Spots can be searched by location and/or availability. Google Map is used for showing spots.

- [ ] Querying spots with location matching
- [ ] Allowing filtering for listings of spots
- [ ] Searching spots by availability
- [ ] Style search & tag components
- [ ] Seed tags with seed data

### Phase 5: Reviews (1 day, W2 F 6pm)

**objective:** Allow users to write reviews for bookings.

- [ ] Adding reviews to bookings
- [ ] Permitting reviews only when user is logged in and booking is completed
- [ ] Style review components.
- [ ] Add review to seeded bookings


### Bonus Features (TBD)
- [ ] **Bonus**: Messaging
- [ ] **Bonus**: User/host profiles
