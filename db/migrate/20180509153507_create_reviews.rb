class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :name
      t.integer :rating
      t.string :comment
      t.boolean :deleted
      t.belongs_to :resturant, foreign_key: true

      t.timestamps
    end
  end
end
