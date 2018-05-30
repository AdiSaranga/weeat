class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :tenbis_enabled, :address,
             :cuisine_id, :last_delivery_time, :rating
end