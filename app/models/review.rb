class Review < ApplicationRecord
  validates :name, presence: true
  validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5}

  belongs_to :restaurant

  validates :restaurant, presence: true
end
