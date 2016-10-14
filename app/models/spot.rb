# == Schema Information
#
# Table name: spots
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text             not null
#  room_type          :string           not null
#  price              :integer          not null
#  lat                :float            not null
#  lng                :float            not null
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Spot < ActiveRecord::Base
  validates :title, :description, :room_type, :price, :lat, :lng, :user_id, :guest_count, presence: true
  validates :room_type, inclusion: {
    in: %w(basement lab penthouse),
    message: "%{value} is not a valid room type for coders"
  }

  has_attached_file :image, default_url: "default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :bookings,
    class_name: "Booking",
    dependent: :destroy
  )

  has_many(
    :reviews,
    through: :bookings,
    source: :review
  )

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.as_room_type(room_types)
    filtered_types = room_types.select { |_, v| v == "true" }.keys
    self.where({room_type: filtered_types})
  end

  def self.in_price_range(min_price, max_price)
    self.where("price >= ?", min_price)
      .where("price < ?", max_price)
  end

  def self.can_fit(guest_count)
    self.where("guest_count >= ?", guest_count)
  end

  def top_reviews
    self.reviews.limit(5).order('created_at ASC').includes(:user)
  end

  def review_count
    self.reviews.length
  end

  def rating
    self.reviews.average("overall")
  end
end
