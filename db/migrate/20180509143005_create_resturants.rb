class CreateResturants < ActiveRecord::Migration[5.1]
  def change
    create_table :resturants do |t|
      t.string :name
      t.string :cuisine
      t.integer :rate
      t.boolean :tenbis_enabled
      t.string :address
      t.time :last_delivery_time

      t.timestamps
    end
  end
end
