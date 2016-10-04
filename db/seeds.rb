# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

test1 = User.create!(email: 'test@email.com', first_name: 'Firstname', last_name: 'Lastname', password: '123456')
user1 = User.create!(email: 'everette_skiles@yahoo.com', first_name: 'Everette', last_name: 'Skiles', password: '123456')
user2 = User.create!(email: 'greg@gmail.com', first_name: 'Greg', last_name: 'Wilkinson', password: '123456')
user3 = User.create!(email: 'kennedi@hotmail.com', first_name: 'Kennedi', last_name: 'Ryan', password: '123456')
