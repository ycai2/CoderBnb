class Booking < ActiveRecord::Base
  validates :user, :spot, :start_date, :end_date, presence: true
  validates :guest_count, numericality: { greater_than: 0 }
  validate :start_must_come_before_end
  validate :does_not_overlap_request

  belongs_to :user
  belongs_to :spot
  has_one :review

  def overlapping_requests
    Booking.where.not(id: self.id)
      .where(spot_id: spot_id)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
        NOT( (start_date > :end_date) OR (end_date < :start_date) )
      SQL
  end

  def does_not_overlap_request
    unless overlapping_requests.empty?
      errors[:base] << "Request conflicts with existing request"
    end
  end

  def start_must_come_before_end
    return unless start_date && end_date
    errors[:start_date] << "must come before end date" if start_date > end_date
  end

  def self.by_user(user_id)
    self.where("user_id = ?", user_id)
  end
end
