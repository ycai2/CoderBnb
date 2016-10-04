Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :new, :create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end

end
