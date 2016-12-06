Rails.application.routes.draw do
  resources :apts, only: [:show]
  resources :users
 
  resources :sessions
  resources :getautocompletes, only: [:show]

  resources :amenities, only: [:create]

end
