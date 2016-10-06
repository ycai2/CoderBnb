# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


test1 = User.create!(email: 'test@email.com', first_name: 'Firstname', last_name: 'Lastname', password: '123456')
guest = User.create!(email: 'guest@gmail.com', first_name: 'Guest', last_name: 'Account', password: 'starwar')
user1 = User.create!(email: 'everette_skiles@yahoo.com', first_name: 'Everette', last_name: 'Skiles', password: '123456')
user2 = User.create!(email: 'greg@gmail.com', first_name: 'Greg', last_name: 'Wilkinson', password: '123456')
user3 = User.create!(email: 'kennedi@hotmail.com', first_name: 'Kennedi', last_name: 'Ryan', password: '123456')

spot1 = Spot.create!(
  title: 'Hard-core coding basement in NYC',
  description: Faker::Hacker.say_something_smart,
  room_type: 'basement',
  price: 3.14,
  lat: 40.725024,
  lng: -73.996792,
  user_id: user1.id
)

spot2 = Spot.create!(
  title: 'Supercomputer lab near The High Line',
  description: Faker::Hacker.say_something_smart,
  room_type: 'lab',
  price: 200,
  lat: 40.748005,
  lng: -74.004786,
  user_id: user2.id
)

spot3 = Spot.create!(
  title: 'Off-the-grid penthouse with top hackers',
  description: 'In China!',
  room_type: 'penthouse',
  price: 10010,
  lat: 39.909539,
  lng: 116.373625,
  user_id: user3.id
)

guest_spot = Spot.create!(
  title: 'My office in Airbnb',
  description: Faker::Hacker.say_something_smart,
  room_type: 'lab',
  price: 101,
  lat: 37.772123,
  lng: -122.405293,
  user_id: guest.id
)
