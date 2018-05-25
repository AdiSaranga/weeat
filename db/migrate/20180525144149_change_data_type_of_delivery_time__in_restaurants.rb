class ChangeDataTypeOfDeliveryTimeInRestaurants < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :last_delivery_time, :time
    add_column :restaurants, :last_delivery_time, :integer, default: 0
  end
end