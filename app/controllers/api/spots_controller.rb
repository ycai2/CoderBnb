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

  end

  def destroy

  end

  def edit
    @spot = Spot.find(params[:id])
  end

  def update

  end

  def spot_params
    params.require(:spot).permit(:title, :description, :room_type, :price, :lat, :lng)
  end
end
