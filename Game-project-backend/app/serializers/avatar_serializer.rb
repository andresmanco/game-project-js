class AvatarSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
  has_many :users
end
