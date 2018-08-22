class AvatarsController < ApplicationController
  def index
    render json: Avatar.all
  end 
end
