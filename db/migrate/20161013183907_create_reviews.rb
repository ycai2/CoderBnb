class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :booking_id, null: false
      t.text :body
      t.integer :cleanliness, null: false, default: 3
      t.integer :quietness, null: false, default: 3
      t.integer :communication, null: false, default: 3
      t.integer :overall, null: false, default: 3

      t.timestamps null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :booking_id
  end
end
