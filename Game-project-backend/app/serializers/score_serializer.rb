class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :points, :avatar_id
  belongs_to :user
end
