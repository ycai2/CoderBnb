# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - Create new user
- `PATCH /api/users` - Edit user info (password)

### Session

- `POST /api/session` - Login
- `DELETE /api/session` - Logout
- `GET /api/session` - Fetch session token

### Spots

- `GET /api/spots` - List all spots
- `POST /api/spots` - Create new spot
- `GET /api/spots/:id` - Show one spot's info, review, and booking request form
- `DELETE /api/spots/:id` - Delete a booking
- `PATCH /api/spots/:id` - Edit a booking

### Bookings

- `GET /api/bookings` - Get all bookings of current user
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Show a specific booking
- `PATCH /api/bookings/:id` - Edit a booking
- `DELETE /api/bookings/:id` - Deleting a booking

### Reviews

- `GET /api/spots/:id/reviews` - Get all reviews of one spot
- `POST /api/bookings/:id/reviews` - Write review for a booking
- `DELETE /api/bookings/:id/reviews/:id` - Delete a review
