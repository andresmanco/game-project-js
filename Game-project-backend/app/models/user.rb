class User < ApplicationRecord
  has_many :user_avatars
  has_many :avatars, through: :user_avatars
  has_many :scores
end
