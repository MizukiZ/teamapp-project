# frozen_string_literal: true

Rails.application.routes.draw do
  
  root 'login#index'

  get 'login/index'

  resources :teams do
    resources :players
  end

end
