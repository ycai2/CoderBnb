class Review < ActiveRecord::Base
  validates :user,
    :booking,
    :cleanliness,
    :quietness,
    :communication,
    :overall,
    presence: true

  belongs_to :user
  belongs_to :booking
  has_one(
    :spot,
    through: :booking,
    source: :spot
  )

  has_one(
    :host,
    through: :spot,
    source: :owner
  )


end
