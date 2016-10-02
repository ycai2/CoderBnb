## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
  - Navbar
  - Search bar

**SpotsContainer**
 - Navbar
  - Spots
  - Search bar

**SpotIndexContainer**
 - Navbar
  - Spot header
  - Request booking
  - Reviews

**NewSpotContainer**
 - Navbar
  - Spot title
  - Spot details
  - Spot price form

**BookingContainer**
 - Booking options
  - Price break-down

**ReviewsContainer**
 - Reviewer
 - Body
   - Rating
   - Text

**NewReviewContainer**
 - New Review
  - Booking info
  - Ratings
  - Textarea

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/spots" | "SpotsContainer" |
| "/home/spots/:spotId/new-booking" | "NewBookingContainer" |
| "/home/spots/:spotId/booking/:bookingId" | "BookingContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/home/spots/:spotId/bookings/:bookingId/new-review" | "NewReviewContainer" |
| "/home/spots/:spotId" | "SpotIndexContainer" |
