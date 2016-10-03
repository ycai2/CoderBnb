{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  spots: {
    1: {
      title: "Luxury bedroom",
      description: "for hard-core programmers",
      author_id: 1,
      location_id: 1
    }
  },
  reviews: {
    1: {
      rating: 4,
      description: "too much space for just programmers, not need!",
      spot_id: 1,
      reviewer_id: 1,
    }
  },
  location: {
    id: 1,
    name: New York City,
    center_lat: 10017,
    center_lng: 20451
  },
  bookings: {
    1: {
      guest_count: 5,
      start_date: 08-03-2016,
      end_date: 08-27-2016,
      user_id: 1,
      spot_id: 1
    }
  }
}
