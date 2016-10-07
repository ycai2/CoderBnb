json.spots @spots do |spot|
  json.id spot.id
  json.title spot.title
  json.description spot.description
  json.image_url asset_path(spot.image.url)
  json.room_type spot.room_type
  json.price spot.price
  json.guest_count spot.guest_count
  json.rating spot.rating
  json.lat spot.lat
  json.lng spot.lng
  json.owner_id spot.user_id
  json.review_count spot.review_count
end
