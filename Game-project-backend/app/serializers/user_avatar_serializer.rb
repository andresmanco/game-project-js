class UserAvatarSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :avatar_id
  belongs_to :user
  belongs_to :avatar
end
