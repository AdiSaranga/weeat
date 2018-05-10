class ChangeResturantsToRestaurants < ActiveRecord::Migration[5.1]
  def change
    rename_table :resturants, :restaurants
  end
end
