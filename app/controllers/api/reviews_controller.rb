class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.booking_id = params[:booking_id]
    
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index

  end

  def show

  end

  def review_params
    params.require(:review).permit(
      :cleanliness,
      :quietness,
      :communication,
      :booking_id,
      :overall,
      :body
    )

  end
end
