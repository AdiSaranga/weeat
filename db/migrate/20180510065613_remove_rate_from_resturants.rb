class RemoveRateFromResturants < ActiveRecord::Migration[5.1]
  def change
    remove_column :resturants, :rate, :integer
  end
end
