class RenameResturantIdInReviewsToRestaurantId < ActiveRecord::Migration[5.1]
  def change
    rename_column :reviews, :resturant_id, :restaurant_id
  end
end
