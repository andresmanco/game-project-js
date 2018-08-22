class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name
  has_many :avatars
  has_many :scores
end
