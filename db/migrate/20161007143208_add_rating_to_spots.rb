class AddRatingToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :rating, :float, null: false, defaut: 3.0
  end
end
