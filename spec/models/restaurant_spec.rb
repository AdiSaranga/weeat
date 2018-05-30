require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  it 'make sure factory bot works (test for my self)' do
    res = build(:restaurant)
    expect(res.cuisine.name).to eq('Italian')
  end
end