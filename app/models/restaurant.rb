class Restaurant < ApplicationRecord
  validates :name, :cuisine, :address, presence: true
  validates :tenbis_enabled, inclusion: { in: [true, false] }
  validates :last_delivery_time, numericality: { only_integer: true }

  has_many :reviews
  belongs_to :cuisine

  validates :cuisine, presence: true
end
