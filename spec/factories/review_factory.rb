FactoryBot.define do
  factory :review do
    name { Faker::Name.name }
    rating {rand(1..5)}
    restaurant
  end
end