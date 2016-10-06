class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :room_type, null: false
      t.integer :price, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :spots, :user_id
  end
end
