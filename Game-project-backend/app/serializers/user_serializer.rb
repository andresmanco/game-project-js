class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password
  has_many :avatars
  has_many :scores
end
