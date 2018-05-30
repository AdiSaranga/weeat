require 'rails_helper'

RSpec.describe RestaurantsController, type: :controller do
  describe 'GET #index' do

    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'returns all restaurants in db' do
      create(:restaurant)
      get :index
      expect(JSON.parse(response.body).size).to eq(1)
    end

    it 'calculate the average rating for each restaurant' do
      res = create(:restaurant)
      review1 = create(:review, restaurant_id: res.id)
      review2 = create(:review, restaurant_id: res.id)
      review3 = create(:review, restaurant_id: res.id)
      review4 = create(:review, restaurant_id: res.id)
      rating_avg = ((review1.rating + review2.rating + review3.rating + review4.rating) / 4).ceil
      get :index
      expect(JSON.parse(response.body)[0]['rating']).to eq(rating_avg)
    end
  end
end
