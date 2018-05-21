Rails.application.routes.draw do
  resources :cuisines
  get 'pages/root'

  root to: "pages#root"
  #resources :reviews
  #resources :restaurants


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
