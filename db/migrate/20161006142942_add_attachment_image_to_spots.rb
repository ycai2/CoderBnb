class AddAttachmentImageToSpots < ActiveRecord::Migration
  def self.up
    change_table :spots do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :spots, :image
  end
end
