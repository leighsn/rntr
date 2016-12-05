Rails.application.routes.draw do
  resources :apts, only: [:show]
  resources :users
  resources :sessions
end
