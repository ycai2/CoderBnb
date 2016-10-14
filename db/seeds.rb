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
  description: "By using the online SMS microchip, developers can copy the 1080p array in our production environment. ",
  room_type: 'basement',
  price: 314.15,
  guest_count: 3,
  rating: 4,
  lat: 40.725024,
  lng: -73.996792,
  user_id: user1.id,
  image: File.open('app/assets/images/gallary/tiny-1.jpg')
)

spot2 = Spot.create!(
  title: 'Supercomputer lab near The High Line',
  description: "Our high-tech lab tries to quantify the HTTP protocol, so it will navigate the primary interface! You can't back up the firewall without overriding the optical JSON panel!",
  room_type: 'lab',
  price: 256,
  guest_count: 3,
  rating: 4,
  lat: 40.748005,
  lng: -74.004786,
  user_id: user2.id,
  image: File.open('app/assets/images/gallary/tiny-2.jpg')
)

spot3 = Spot.create!(
  title: 'Off-the-grid penthouse with top hackers',
  description: 'In New Jersey!',
  room_type: 'penthouse',
  price: 999,
  guest_count: 4,
  rating: 2,
  lat: 40.7310216,
  lng: -74.031204,
  user_id: user3.id,
  image: File.open('app/assets/images/gallary/tiny-3.jpg')
)

spot4 = Spot.create!(
  title: 'NYU Computer lab',
  description: 'Our lab will synthesize the haptic ADP system, that should transmitter the SCSI hard drive to back up the neural IB panel. That should system the PCI panel!',
  room_type: 'lab',
  price: 101,
  guest_count: 3,
  rating: 4,
  lat: 40.7295133,
  lng: -73.9964609,
  user_id: user3.id,
  image: File.open('app/assets/images/gallary/tiny-5.jpg')
)

spot5 = Spot.create!(
  title: "NYC's most secret basement for writing bubble sort algorithms",
  description: 'Use the open-source SDD alarm, then you can override the mobile pixel! If we index the firewall, we can get to the SCSI driver through the haptic AI bandwidth!',
  room_type: 'basement',
  price: 512,
  guest_count: 2,
  rating: 4,
  lat: 40.7295134,
  lng: -73.9964609,
  user_id: user3.id,
  image: File.open('app/assets/images/gallary/tiny-4.jpg')
)
