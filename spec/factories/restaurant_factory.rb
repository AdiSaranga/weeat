FactoryBot.define do
  factory :restaurant do
    name {Faker::Name.name}
    tenbis_enabled {Faker::Boolean.boolean}
    address {Faker::Address.full_address}
    last_delivery_time {rand(0..120)}
    cuisine
  end
end