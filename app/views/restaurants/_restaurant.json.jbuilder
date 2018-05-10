json.extract! restaurant, :id, :name, :cuisine, :tenbis_enabled, :address, :last_delivery_time, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
