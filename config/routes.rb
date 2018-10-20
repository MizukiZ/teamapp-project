# frozen_string_literal: true

Rails.application.routes.draw do
  
  root 'welcome#index'

  get 'welcome/index'

  resources :teams do
    resources :players
  end

end
