class ChangeRatingInSpots < ActiveRecord::Migration
  def up
    change_column_default :spots, :rating, 0.0
  end

  def down
    change_column_default :spots, :rating, 0.0
  end
end
