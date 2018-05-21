class ChangeDataTypeOfCuisineInRestaurants < ActiveRecord::Migration[5.1]
  def change
    change_column :restaurants, :cuisine, :integer
    rename_column :restaurants, :cuisine, :cuisine_id
    end
end
