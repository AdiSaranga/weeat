class Restaurant < ApplicationRecord
  has_many :reviews
  belongs_to :cuisine
end
