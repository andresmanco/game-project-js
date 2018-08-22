class UserAvatarsController < ApplicationController
  def index
    render json: UserAvatar.all
  end
  def create
    render json: UserAvatar.create(userAvatar_params)
  end

  private

  def userAvatar_params
    params.require(:user_avatar).permit(:user_id, :avatar_id)
  end

end
