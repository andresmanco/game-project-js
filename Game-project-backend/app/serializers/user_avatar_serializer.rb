class UserAvatarSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :avatar_id
end
