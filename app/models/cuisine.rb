class Cuisine < ApplicationRecord
  validates :name, :icon_id, presence: true
end
