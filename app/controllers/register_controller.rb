class RegisterController < ApplicationController
  def index
  end

  def new
    @user = User.new
  end
end
