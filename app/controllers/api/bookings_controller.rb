class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.by_user(current_user.id).includes(:spot)
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id

    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  def booking_params
    params.require(:booking).permit(
      :start_date,
      :end_date,
      :spot_id,
      :guest_count
    )
  end
end
