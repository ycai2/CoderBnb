class AddGuestCountToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :guest_count, :integer, null: false
  end
end
