class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.in_bounds(params[:filters][:bounds])
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def new

  end

  def create
    @spot = Spot.new(spot_params)
    @spot.user_id = currentUser.id

    if @spot.save
      render :show
    else
      render json: @spot, status: :unprocessable_entity
    end
  end

  def destroy

  end

  def edit
    @spot = Spot.find(params[:id])
  end

  def update

  end

  def spot_params
    params.require(:spot).permit(:title, :description, :room_type, :price, :lat, :lng, :guest_count)
  end
end
