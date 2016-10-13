json.id @booking.id
json.user_id @booking.user_id
json.spot_id @booking.spot_id
json.spot_image_url asset_path(@booking.spot.image.url)
json.spot_title @booking.spot.title
json.guest_count @booking.guest_count
json.start_date @booking.start_date
json.end_date @booking.end_date
