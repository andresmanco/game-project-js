class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :points
  belongs_to :user
end
