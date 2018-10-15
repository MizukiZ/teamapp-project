# frozen_string_literal: true

Rails.application.routes.draw do
  
  root 'welcome#index'

  get 'welcome/index'

  resources :articles do
    resources :comments
  end

  resources :teams do
    resources :players
  end


  get '/assets/images/:name.:ext', to: redirect('/assets/%{name}.%{ext}'), constraints: { name: /.+/, ext: /(jpg|png|gif)/ }

end
