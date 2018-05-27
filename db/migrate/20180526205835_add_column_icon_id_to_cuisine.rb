class AddColumnIconIdToCuisine < ActiveRecord::Migration[5.1]
  def change
    add_column :cuisines, :icon_id, :string, default: ''
  end
end
