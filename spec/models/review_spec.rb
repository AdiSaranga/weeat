require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'test rating range' do
    it 'should fail validation on review greater than 5' do
      expect(build(:review, rating: 7)).to be_invalid
    end
    it 'should fail validation on review lower than 0' do
      expect(build(:review, rating: -3)).to be_invalid
    end
  end
end