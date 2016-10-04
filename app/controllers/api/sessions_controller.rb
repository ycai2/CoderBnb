class Api::SessionsController < ApplicationController
  before_action :require_current_user, only: [:destroy]
  before_action :require_no_current_user, only: [:create]

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    render json: {}
  end
end
