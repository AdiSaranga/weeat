class ChangeDataTypeOfCuisineInRestaurants < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :cuisine, :integer
    add_reference :restaurants, :cuisine, foreign_key: true
  end
end
