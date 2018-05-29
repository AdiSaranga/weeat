FactoryBot.define do
  factory :review do
    name { Faker::Name.name }
    rating {rand(1..5)}
    restaurant
  end

  factory :reviewWithRes do
    name { Faker::Name.name }
    rating {rand(1..5)}
    association :restaurant, factory: :restaurant, id: 123
  end
end