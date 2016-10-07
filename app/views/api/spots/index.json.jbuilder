json.spots @spots do |spot|
  json.title spot.title
  json.description spot.description
  json.room_type spot.room_type
  json.price spot.price
  json.guest_count spot.guest_count
  json.rating spot.rating
  json.lat spot.lat
  json.lng spot.lng
  json.owner_id spot.user_id
end
