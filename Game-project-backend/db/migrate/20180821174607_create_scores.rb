class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :user_id
      t.integer :points
      t.integer :avatar_id
      t.timestamps
    end
  end
end
